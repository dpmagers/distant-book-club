class ReaderSerializer < ActiveModel::Serializer
  attributes :id, :name, :fave_books, :password_digest
end
