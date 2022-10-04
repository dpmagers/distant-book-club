class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_data


    def index
        render json: Review.all, status: :ok
    end 

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review, status: 202
    end 

    def destroy
        review = Review.find(params[:id])
        review.destroy
        render json: {}, status: 204
    end 

    private

    def book_params
        params.permit(:reader_id, :book_id, :comment, :rating, :would_recommend)

    end 

    def invalid_data(error)
        render json: {error: error.message}, status: 422
    end 




end
