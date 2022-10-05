class BookReviewsSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :synopsis, :image

  has_many :reviews
end
