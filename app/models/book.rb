class Book < ApplicationRecord
    has_many :reviews
    has_many :readers, through: :reviews

    validates :title, presence: true, uniqueness: true
    validates :author, presence: true


end
