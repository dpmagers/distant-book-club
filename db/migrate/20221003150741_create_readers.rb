class CreateReaders < ActiveRecord::Migration[7.0]
  def change
    create_table :readers do |t|
      t.string :username
      t.string :favorite_book
      t.string :password_digest

      t.timestamps
    end
  end
end
