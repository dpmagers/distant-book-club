class ReadersController < ApplicationController
    
    def show
        render json: @current_reader
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
