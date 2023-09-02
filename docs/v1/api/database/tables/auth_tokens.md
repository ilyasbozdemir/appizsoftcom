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
