package ec.edu.espe.HOManagment.controller;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

/**
 * Conexión única a la base de datos MongoDB.
 */
public class Connection {

    private static MongoClient mongoClient = null;
    private static MongoDatabase mongodb = null;

    private Connection() {}

    public static MongoDatabase connectionDataBase() {
        if (mongodb == null) {
            String user = System.getenv("MONGO_USER");
            String password = System.getenv("MONGO_PASSWORD");
            String db = "S&OHardWareStore";

            String uri = String.format(
                "mongodb+srv://%s:%s@cluster0.kawghe4.mongodb.net/?retryWrites=true&w=majority",
                user,
                password
            );

            mongoClient = MongoClients.create(uri);
            mongodb = mongoClient.getDatabase(db);
        }
        return mongodb;
    }

    // Este método es el que debes usar en todo el sistema
    public static MongoDatabase getMongoDatabase() {
        return connectionDataBase();
    }
}
