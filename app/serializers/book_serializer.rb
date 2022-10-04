class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :year_published, :image
end
