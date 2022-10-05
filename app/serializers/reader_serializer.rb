class ReaderSerializer < ActiveModel::Serializer
  attributes :id, :username, :favorite_book, :password_digest
end
