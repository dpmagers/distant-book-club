class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :reader_id
      t.integer :book_id
      t.string :comment
      t.integer :rating
      t.boolean :would_recommend

      t.timestamps
    end
  end
end
