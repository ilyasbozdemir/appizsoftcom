
## Site İçi Mesajlar Tablosu
### Tablo adı :  ` messages  `

Site içi mesajlar, kullanıcıların birbirleriyle iletişim kurmasını sağlayan bir özelliktir. Kullanıcılar, mesajlaşarak bilgi paylaşabilir, sorular sorabilir ve iletişim kurabilirler.


Aşağıda, `messages` tablosunun alanları ve açıklamaları yer almaktadır:

| Alan Adı          | Tür          | Açıklama                                        |
|-------------------|--------------|-------------------------------------------------|
| `message_id`      | int          | Mesaj kimliği (benzersiz)                       |
| `sender_id`       | int          | Gönderen kullanıcının kimliği (`user_id` gelicek )    |
| `receiver_id`     | int          | Alıcı kullanıcının kimliği                      |
| `message_content` | text         | Mesaj içeriği                                   |
| `timestamp`       | datetime     | Mesajın gönderildiği zaman                      |
| `is_read`         | boolean      | Mesajın okunup okunmadığını belirtir            |

### Kullanım Senaryoları

1. **Mesaj Gönderme:**
   - Kullanıcı, bir diğer kullanıcıya mesaj göndermek istediğinde, `POST /api/v1/messages` endpointini kullanır.
   - Sistem, gönderilen mesajı alıcı kullanıcıya ileterek iletişimi başlatır.

2. **Alınan Mesajları Görüntüleme:**
   - Kullanıcı, kendisine gönderilen mesajları görüntülemek istediğinde, `GET /api/v1/messages/received` endpointini kullanır.
   - Kullanıcı, gelen mesajları görüntüleyerek iletişimi takip eder.

3. **Gönderilen Mesajları Görüntüleme:**
   - Kullanıcı, kendisinin gönderdiği mesajları görüntülemek istediğinde, `GET /api/v1/messages/sent` endpointini kullanır.
   - Kullanıcı, gönderilen mesajları görüntüleyerek iletişimi takip eder.

4. **Okunmamış Mesaj Bildirimi:**
   - Kullanıcı, okunmamış mesajlarına dikkat etmek istediğinde, `GET /api/v1/messages/unread` endpointini kullanır.
   - Sistem, okunmamış mesajlar için bir bildirim göndererek kullanıcının dikkatini çeker.

5. **Mesaj Okuma ve İşaretleme:**
   - Kullanıcı, gelen bir mesajı okuduğunda veya işlediğinde, `PUT /api/v1/messages/{message_id}` endpointini kullanır.
   - Kullanıcı, mesajı okundu olarak işaretleyerek iletişimi takip eder.
