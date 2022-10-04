class BooksController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :invalid_data


    
    def index
        render json: Book.all, status: :ok
    end 

    def show
        book = Book.find(params[:id])
        render json: book, serializer: BookReviewsSerializer, status: :ok
    end 

    
    def create
        book = Book.create!(book_params)
        render json: book, status: :created
    end

    private

    def book_params
        params.permit(:title, :author, :synopsis, :image)
    end 

    def invalid_data(error)
        render json: {error: error.message}, status: 422
    end 

    def record_not_found
        render json: {"error": "Book not found"}, status: 404
    end 





end
