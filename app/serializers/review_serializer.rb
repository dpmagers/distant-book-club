class ReviewSerializer < ActiveModel::Serializer
  attributes :name, :comment, :rating, :would_recommend


  def name
    object.reader.username
  end 

  # Review.first.reader.username

end
