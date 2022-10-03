class Review < ApplicationRecord
    belongs_to :reader
    belongs_to :book

    validates :reader_id, presence: true
    validates :book_id, presence: true
    validates :rating, inclusion: {in: 1..5}, presence: true



    
end
