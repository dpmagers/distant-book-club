class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        reader = Reader.find_by(username: params[:username])
        if reader&.authenticate(params[:password])
            session[:reader_id] = reader.id
            render json: reader
        else 
            render json: {error: ["Invalid password or username"]}, status: :unauthorized
        end 
    end 

    def destroy
        session.destroy :reader_id
        head :no_content
    end 
end
