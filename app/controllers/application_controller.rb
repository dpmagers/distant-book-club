class ApplicationController < ActionController::API
    include ActionController::Cookies

    # def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    #   end

    before_action :authorize

    private

    def authorize
      @current_reader = Reader.find_by(id: session[:reader_id])

      render json: {errors: ["Not Authorized, please login"]}, status: :unauthorized, unless @current_reader
    end 
end
