# Veritabanı Tabloları ve Sütunları

## Kullanıcılar Tablosu

### Tablo adı : `users `

Bu tablo, kullanıcıların bilgilerini saklamak amacıyla kullanılır. Her kullanıcı için bir kayıt oluşturulur.

| Sütun Adı     | Tür          | Açıklama                            |
| ------------- | ------------ | ----------------------------------- |
| `user_id`       | int          | Kullanıcının benzersiz kimliği      |
| `username`      | varchar(50)  | Kullanıcının kullanıcı adı          |
| `email`         | varchar(100) | Kullanıcının e-posta adresi         |
| `password_hash` | varchar(255) | Kullanıcının şifresi (hash değeri)  |
| `full_name`     | varchar(100) | Kullanıcının tam adı                |
| `created_at`    | datetime     | Kullanıcının hesap oluşturma tarihi |
| `updated_at`    | datetime     | Kullanıcının son güncelleme tarihi  |
| `last_login`    | datetime     | Son oturum açma tarihi              |

### Kullanım Örnekleri

- Kullanıcıların bilgileri bu tabloya eklenir.
- Her kullanıcı için benzersiz bir kimlik (``user_id``) atanır.
- Kullanıcı adı (`username`) ve e-posta (email) alanları benzersiz olmalıdır.
- Şifreler (`password_hash`) güvenli şekilde saklanır ve hash değerleri olarak tutulur.

### Parola Güvenliği ve Hash Değeri

- Kullanıcıların şifreleri (parolaları) veritabanında güvenli şekilde saklamak için parola hashleme kullanılır. Parola hashlemesi, şifrenin orijinal hali yerine hash (karma) değeri olarak saklanmasını sağlar. Bu sayede şifrelerin açık olarak saklanmasının önüne geçilir.

- Ayrıca, parola hashleme işlemine ek olarak tuzlama (salt) yöntemi de kullanılır. Tuzlama, her kullanıcı için rastgele ve benzersiz bir tuz değeri oluşturulmasını sağlar. Bu tuz değeri, her kullanıcının parolasını hashlerken kullanılır. Tuzlama, aynı parolanın farklı kullanıcılar için aynı hash değerine dönüşmesini önler. Bu sayede parola hashlerinin güvenliği artar.

- Bu tabloda yer alan `password_hash` alanı, kullanıcıların parola hash değerlerini saklamak amacıyla kullanılır. Bu yöntem, kullanıcı parolalarının güvenliği için önemlidir ve parola hashleme ile tuzlama kullanılarak sağlanır.

Bu tablo, kullanıcıların temel bilgilerini saklamak ve kullanıcı yönetimi işlemleri için kullanılır.

### Kullanıcılar API

- Kullanıcı oluşturmak için `POST /api/v1/users` endpointi kullanılır.
- Belirli bir kullanıcının bilgilerini görüntülemek için `GET /api/v1/users/{user_id}` endpointi kullanılır.
- Kullanıcı bilgilerini güncellemek için `PUT /api/v1/users/{user_id}` endpointi kullanılır.
- Kullanıcı silmek için `DELETE /api/v1/users/{user_id}` endpointi kullanılır.
- Kullanıcının aktivitelerini görüntülemek için `GET /api/v1/user-activities/{user_id}` endpointi kullanılır.


***

## Auth Tokens Tablosu
### Tablo adı : `auth_tokens `


Bu tablo, kullanıcıların kimlik doğrulama işlemleri sırasında oluşturulan ve kullanılan kimlik doğrulama tokenlarını saklamak amacıyla kullanılır.

### Alanlar

| Sütun Adı       | Tür          | Açıklama                                      |
|-----------------|--------------|-----------------------------------------------|
| `token_id`      | int          | Token kimliği (benzersiz)                     |
| `user_id`       | int          | İlgili kullanıcının kimliği                   |
| `token`         | varchar(255) | Kimlik doğrulama tokenı                       |
| `expiration_time` | datetime   | Token'ın son kullanma tarihi                  |
| `created_at`    | datetime     | Token'ın oluşturulma tarihi  

### Token Kullanımı ve Güvenliği

- Kimlik doğrulama tokenları, kullanıcıların oturum açma işlemleri sırasında oluşturulur ve kullanılır. Bu tokenlar, oturum açma sürecinin güvenliğini artırmak amacıyla kullanılır. Her token bir kimliği ve son kullanma tarihini içerir.

- Son kullanma tarihi geçmiş olan tokenlar veritabanından silinir veya geçersiz hale getirilir. Bu sayede, geçerliliğini yitirmiş tokenlarla olası güvenlik riskleri azaltılır.

- Kimlik doğrulama tokenları, kullanıcıların oturum açma işlemleri sırasında oluşturulur ve kullanılır. Bu tokenlar, oturum açma sürecinin güvenliğini artırmak amacıyla kullanılır. Her token bir kimliği ve son kullanma tarihini içerir.

- Son kullanma tarihi geçmiş olan tokenlar veritabanından silinir veya geçersiz hale getirilir. Bu sayede, geçerliliğini yitirmiş tokenlarla olası güvenlik riskleri azaltılır.

- Uygulamanızın arka planında, her token isteği öncesi `expiration_time` alanı kontrol edilir. Eğer bir tokenin süresi geçmişse, kullanıcı otomatik olarak oturum açmaya yönlendirilir. Bu, kullanıcıların oturumlarının süresi dolduğunda tekrar oturum açmalarını sağlamak için kullanılır.

- Bu tablo, kullanıcıların kimlik doğrulama tokenlarını güvenli şekilde saklamak ve yönetmek için kullanılır.

## Kullanım Senaryoları

- Kullanıcı girişi yapmak için `POST /api/v1/auth/login` endpointi kullanılır.
- Oturumu sonlandırmak için `POST /api/v1/auth/logout` endpointi kullanılır.
- Şifremi unuttum işlemi için `POST /api/v1/auth/forgot-password` endpointi kullanılır.
- Şifre sıfırlama işlemi için `POST /api/v1/auth/reset-password` endpointi kullanılır.
- Token yenileme işlemi için `POST /api/v1/auth/refresh-token` endpointi kullanılır.
- Hesap doğrulama için `POST /api/v1/auth/verify-email` endpointi kullanılır.
- İki faktörlü kimlik doğrulama için `POST /api/v1/auth/two-factor-auth` endpointi kullanılır.


***

## Kullanıcı Aktiviteleri Tablosu
### Tablo adı : `user_activities  `

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

***

## User Notifications Tablosu
### Tablo adı : `user_notifications `

| Sütun Adı           | Tür          | Açıklama                                           |
|--------------------|--------------|----------------------------------------------------|
| `notification_id`  | int          | Bildirim kimliği (benzersiz)                       |
| `user_id`          | int          | İlgili kullanıcının kimliği                        |
| `message`          | varchar(255) | Bildirim mesajı                                    |
| `user_role`        | varchar(50)  | Kullanıcının rolü (örn. Admin, Kullanıcı)         |
| `notification_type`| varchar(50)  | Bildirim türü (örn. Etkinlik, Duyuru)             |
| `timestamp`        | datetime     | Bildirimin gönderildiği zaman                     |
| `is_read`          | boolean      | Bildirimin okunup okunmadığını belirtir           |
| `additional_data`  | json         | Ek veri (örn. link, resim)                        |

## Kullanım Senaryoları

1. **Yeni Etkinlik Bildirimi Almak:**
   - Kullanıcı etkinlik kategorisine ait bildirimleri almak istediğinde, `/api/v1/notifications?type=Etkinlik` endpointini kullanır.
   - Sistem, kullanıcının ilgi alanlarına uygun etkinliklerle ilgili bildirimleri sunmasını bekler.

2. **Admin Duyurularını Takip Etmek:**
   - Admin kullanıcısı, yeni duyuruları hızlıca öğrenmek istediğinde, `/api/v1/notifications?type=Admin+Duyuru` endpointini kullanır.
   - Yeni bir admin duyurusu geldiğinde, bildirimin sisteme düşmesini bekler.

3. **Teknik Sorunları İzlemek:**
   - Teknik ekip üyeleri, teknik sorunlar kategorisine ait bildirimleri takip eder.
   - Sistem, yeni bir teknik sorun olduğunda bu bildirimi ilgili ekip üyelerine sunar.

4. **Ödeme Bildirimlerini İncelemek:**
   - Kullanıcı, ödeme kategorisine ait bildirimleri görüntülemek istediğinde, `/api/v1/notifications?type=Ödeme+Bildirimi` endpointini kullanır.
   - Sistem, kullanıcının ödeme işlemleri hakkında bilgilendiren bildirimleri sunar.

5. **Kullanılmayan Bildirimleri Temizlemek:**
   - Kullanıcı, okumadığı veya ilgisini çekmeyen bildirimleri "okunmadı" durumunda bırakır.
   - Belirli bir süre sonra okunmayan bildirimler otomatik olarak temizlenir.

6. **Bildirimleri Okuma ve İşaretleme:**
   - Kullanıcı, gelen bildirimleri görüntüler ve okur.
   - Bildirimi okuduğunda veya işlediğinde "okundu" olarak işaretler.

## Bildirim Türleri

Bildirimler, kullanıcılara çeşitli konularda bilgi vermek ve etkileşimde bulunmak için kullanılır. Aşağıda belirtilen bildirim türleri, kullanıcıların alabileceği bildirim tiplerini açıklar:

- **Admin Duyuruları:** Sadece admin kullanıcıları için önemli duyurular.
- **Kullanıcı Güncellemeleri:** Kullanıcı bilgilerinde yapılan değişiklikleri bildiren bildirimler.
- **Etkinlik Bildirimleri:** Tüm kullanıcılara etkinliklerle ilgili bildirimler.
- **Ödeme Bildirimleri:** Ödemelerle ilgili bildirimler.
- **Teknik Sorun Bildirimleri:** Teknik sorunlar hakkında bilgilendirme.
- **Destek Bildirimleri:** Kullanıcıların destek taleplerine dair bildirimler.

To-do listesi veya görev takibi için kullanılan bildirimler, kullanıcılara tamamlanmamış görevlerle ilgili hatırlatıcılar sağlar. Aşağıda, to-do listesi için kullanılan bildirim önerileri bulunmaktadır:

1. **Görev Son Tarihi Yaklaştığında Bildirim:**
   - Görevin son teslim tarihi yaklaştığında veya geçtiğinde, kullanıcıya bir bildirim gönderilir.
   - Kullanıcılar, önemli görevlerin son tarihini unutmamaları için hatırlatıcılar alır.

2. **Atanan Görev Bildirimi:**
   - Kullanıcıya bir görev atanırsa veya görevlerle ilgili değişiklik yapılırsa, ilgili kullanıcılara bir bildirim gönderilir.
   - Kullanıcılar, üzerlerine atanan yeni görevler veya görevlerdeki değişiklikler hakkında hızlıca bilgilendirilir.

3. **Görev İlerlemesi Bildirimi:**
   - Kullanıcının tamamlanmamış görevlerde ilerleme kaydettiğinde, ilerlemeyi hatırlatan bildirimler gönderilir.
   - Kullanıcılar, görevlerini tamamlamaya yaklaştıkça motive edilirler.

4. **Günlük Hatırlatıcılar:**
   - Kullanıcının her gün belirli bir saatte tamamlanmamış görevlerini hatırlatmak için günlük bildirimler gönderilir.
   - Kullanıcılar, gün içindeki yapılacakları gözden geçirir ve görevlerini tamamlamak için plan yaparlar.

Bu tür bildirimler, kullanıcıların to-do listelerini düzenlemelerine ve görevlerini daha etkili bir şekilde takip etmelerine yardımcı olur.


Bu bildirim türleri, kullanıcıların alabileceği farklı bilgi ve etkileşim türlerini yansıtmaktadır. Kullanıcılara özelleştirilmiş ve ilgi alanlarına uygun bildirimler sunarak kullanıcı deneyimini geliştirebilirsiniz.

***
## Site İçi Mesajlar Tablosu
### Tablo adı : `messages  `

Site içi mesajlar, kullanıcıların birbirleriyle iletişim kurmasını sağlayan bir özelliktir. Kullanıcılar, mesajlaşarak bilgi paylaşabilir, sorular sorabilir ve iletişim kurabilirler.

### Veritabanı Tablosu

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

(Diğer senaryoları benzer şekilde yazabilirsiniz.)


***


***