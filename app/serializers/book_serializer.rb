class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :synopsis, :image
end
