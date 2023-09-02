
## Team Member Tablosu
### Tablo adı : `team_members  `


Ekip üyeleri, projede yer alan takım üyelerini ve rollerini temsil eden bir özelliktir. Her bir ekip üyesinin adı, rolü, fotoğrafı ve sosyal medya hesapları gibi bilgiler bu tabloda tutulur.


| Alan Adı        | Tür          | Açıklama                                        |
|-----------------|--------------|-------------------------------------------------|
| `member_id`     | int          | Ekip üye kimliği (benzersiz)                   |
| `user_id`       | int          | İlgili kullanıcının kimliği                    |
| `role`          | varchar(100) | Ekip üyesinin rolü                              |
| `photo_url`     | varchar(255) | Ekip üyesinin fotoğraf URL'si                  |
| `social_media`  | jsonb        | Ekip üyesinin sosyal medya hesapları           |

### Kullanım Senaryoları

1. **Ekip Üyesi Ekleme:**
   - Admin kullanıcısı, yeni bir ekip üyesi eklemek istediğinde, `POST /api/v1/team-members` endpointini kullanır.
   - Sistem, ekip üyesi bilgilerini alarak veritabanına ekler.

2. **Ekip Üyesi Güncelleme:**
   - Admin kullanıcısı, varolan bir ekip üyesinin bilgilerini güncellemek istediğinde, `PUT /api/v1/team-members/{member_id}` endpointini kullanır.
   - Sistem, ekip üyesi bilgilerini güncelleyerek değişiklikleri kaydeder.

3. **Ekip Üyesi Silme:**
   - Admin kullanıcısı, artık projede görev yapmayan bir ekip üyesini silmek istediğinde, `DELETE /api/v1/team-members/{member_id}` endpointini kullanır.
   - Sistem, ekip üyesini veritabanından siler.

4. **Ekip Üyesi Listeleme:**
   - Kullanıcı, projedeki tüm ekip üyelerini görüntülemek istediğinde, `GET /api/v1/team-members` endpointini kullanır.
   - Sistem, tüm ekip üyelerini listeleyerek görüntü sağlar.

