class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_data
before_action :authorize

    def index
        render json: Review.all, status: :ok
    end 

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find(params[:id])
        if review.reader_id == @current_reader.id
            review.update!(review_params)
            render json: review, status: 202
        else 
            render json: {errors: ["Not Authorized"]}, status: 401
        end 
             
    end 

    def destroy
        review = Review.find(params[:id])

        if review.reader_id == @current_reader.id
            review.destroy
            render json: {}, status: 204
        else 
            render json: {errors: ["Not Authorized"]}, status: 401
        end 
    end 

    private

    def review_params
        params.permit(:reader_id, :book_id, :comment, :rating, :would_recommend)
    end 

    def invalid_data(error)
        render json: {error: error.message}, status: 422
    end 

    def authorize
        @current_reader = Reader.find_by(id: session[:reader_id])

        render json: {errors: ["Not Authorized"]}, status: :unauthorized unless @current_reader
    end 
end
