const mongoose = require('mongoose');
const config = require('../Settings/Systems'); //../Settings/System');

// MongoDB bağlantı URL'si
const uri = config.MongoURL;

class MysMongoDb {
  static async Connect() {
    try {
      // Mongoose bağlantısı yoksa MongoDB'ye bağlan
      if (!mongoose.connection.readyState) {
        mongoose.set('strictQuery', false);
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 30000 });
        console.log('MongoDB bağlantısı başarıyla açıldı.');
      }

      // Bağlantıyı dışarı aktar
      return mongoose.connection;
    } catch (error) {
      console.error('MongoDB bağlantısı sırasında bir hata oluştu:', error);
      throw error;
    }
  }

  static async Close() {
    try {
      if (mongoose.connection.readyState) {
        // Bağlantı varsa kapat
        await mongoose.connection.close();
        console.log('MongoDB bağlantısı başarıyla kapatıldı.');
      }
    } catch (error) {
      console.error('MongoDB bağlantısı kapatılırken bir hata oluştu:', error);
      throw error;
    }
  }
}

// MysMongoDb sınıfını dışarıya aktar
module.exports = MysMongoDb;
