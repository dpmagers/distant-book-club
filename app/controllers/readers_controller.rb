class ReadersController < ApplicationController
    skip_before_action :authorize, only: :create
    def show
        render json: @current_reader
    end 

    def index
        render json: Reader.all, status: :ok
    end 
    
    def create
        reader = Reader.create(reader_params)
        session[:reader_id] = reader.id
        render json: reader, status: :created
    end 

    private 

    def reader_params
        params.permit(:username, :password, :favorite_book)
    end 
end
