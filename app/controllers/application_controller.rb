class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize

    private

    def authorize
      @current_reader = Reader.find_by(id: session[:reader_id])

      render json: {errors: ["Not Authorized, please login"]}, status: :unauthorized unless @current_reader
    end 
end
