## Kullanıcılar Tablosu

### Tablo adı : `users`

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

