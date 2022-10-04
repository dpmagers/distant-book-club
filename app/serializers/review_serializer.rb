class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :reader_id, :book_id, :comment, :rating, :would_recommend
end
