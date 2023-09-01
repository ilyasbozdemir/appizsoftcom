# Kullanıcı API Dokümantasyonu
- Kullanıcılar kısmında sitede yönetici rolleri için ekleme silme güncelleme ve listeleme hakkında bilgi verilmiştir.
- Güncellenecektir [Veritabanı Şeması](database.md) dosyasına göre


 ### Kullanıcı Ekleme (Create User)

Yeni bir kullanıcı eklemek için bu endpoint'i kullanabilirsiniz.

**Endpoint:**

`POST /api/v1/users`

**İstek Gövdesi (Request Body):**

```json
{
  "username": "john_doe",
  "password": "mysecretpassword",
  "email": "john@example.com"
}
```
#### Yanıt (Response):
Başarılı bir giriş durumunda, aşağıdaki gibi bir yanıt alırsınız:

```json
{
"message": "Yeni kullanıcı başarıyla oluşturuldu."
}
```

**Hata Durumları:**

- 400 Bad Request: Eksik veya hatalı veri girişi.
- 500 Internal Server Error: 

 ### Kullanıcı Güncelleme (Update User)
Mevcut bir kullanıcının bilgilerini güncellemek için bu endpoint'i kullanabilirsiniz.

**Endpoint:**

`PUT /api/v1/users/{userId}`

- **Yol:** `/api/v1/users/{userId`
- **Metod:** PUT

### not : [---devamı gelicek--- ]