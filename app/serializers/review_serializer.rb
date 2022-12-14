class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :reader_id, :book_id, :name, :favorite_book, :comment, :rating, :would_recommend


  def name
    object.reader.username
  end 

  def favorite_book
    object.reader.favorite_book
  end

end
