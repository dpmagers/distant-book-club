class CreateReaders < ActiveRecord::Migration[7.0]
  def change
    create_table :readers do |t|
      t.string :name
      t.string :fave_books
      t.string :password_digest

      t.timestamps
    end
  end
end
