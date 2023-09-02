## Kullanıcı Aktiviteleri Tablosu
### Tablo adı : `user_activities `

Bu tablo, kullanıcıların gerçekleştirdiği aktiviteleri kaydetmek amacıyla kullanılır. Kullanıcı girişleri, çıkışları, sayfa görüntülemeleri gibi aktiviteler bu tabloda saklanır.

### Alanlar

| Sütun Adı      | Tür          | Açıklama                                                  |
|----------------|--------------|-----------------------------------------------------------|
| `activity_id`  | int          | Aktivite kimliği (benzersiz)                              |
| `user_id`      | int          | İlgili kullanıcının kimliği                               |
| `activity`     | varchar(255) | Gerçekleştirilen aktivite (örn. Kullanıcı girişi, çıkışı) |
| `timestamp`    | datetime     | Aktivitenin gerçekleştiği zaman                           |
 
### Kullanım Senaryoları

- Kullanıcı aktivitesi eklemek için `POST /api/v1/user-activities` endpointi kullanılır.
- Belirli bir kullanıcının aktivitelerini görüntülemek için `GET /api/v1/user-activities/{user_id}` endpointi kullanılır.
