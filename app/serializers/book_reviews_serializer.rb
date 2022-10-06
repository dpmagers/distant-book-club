class BookReviewsSerializer < ActiveModel::Serializer
  attributes :title, :author, :synopsis, :image, :average_rating
  has_many :reviews, serializer: ReviewSerializer
  # has_many :readers

  def average_rating
    "Average Rating #{object.reviews.average(:rating).to_f}"
  end 



end
