# Kimlik Doğrulama API Dokümantasyonu

- Auth kısmında sitede user login logout  vs  hakkında bilgi verilmiştir

- Güncellenecektir [Veritabanı Şeması](../database.md) dosyasına göre

  
 ### Kullanıcı Girişi (Login)

Kullanıcı girişi yapmak için bu endpoint'i kullanabilirsiniz.

**Endpoint:**

`POST /api/v1/auth/login`

**İstek Gövdesi (Request Body):**

- **Yol:** `/api/v1/auth/login`
- **Metod:** POST

- **Parametreler:**

| Parametre          | Tür     | Zorunluluk | Açıklama                     
| ----------------  | ------- | ---------- | ---------------------------- 
| `usernameOrEmail` | string  | Zorunlu    | kullanıcı veya email adresi yazılabilir    |
| `password`       | string  | Zorunlu    |  kullanıcıya ait şifre    |



```json
{
  "usernameOrEmail": "kullanici_adi",
  "password": "gizli_sifre"
}


```
#### Yanıt (Response):
Başarılı bir giriş durumunda, aşağıdaki gibi bir yanıt alırsınız:

```json
{
  "token": "your_jwt_token_here"
}

```

**Hata Durumları:**

- 400 Bad Request: Eksik veya hatalı veri girişi.
- 401 Unauthorized: Kullanıcı kimlik doğrulaması başarısız.
- 500 Internal Server Error: Sunucu hatası, giriş yapılamadı.


### Kullanıcı Çıkışı (Logout)

Kullanıcı çıkışı yapmak için bu endpoint'i kullanabilirsiniz.

**Endpoint:**

`POST /api/v1/auth/logout`

**İstek Gövdesi (Request Body):**

```json
{
  "usernameOrEmail": "john_doe",
}

```
#### Yanıt (Response):
Başarılı bir giriş durumunda, aşağıdaki gibi bir yanıt alırsınız:

```json
{
  "message": "Çıkış işlemi başarıyla tamamlandı."
}
```
**Hata Durumları:**

- 400 Bad Request: Eksik veya hatalı veri girişi.
- 401 Unauthorized: Kullanıcı kimlik doğrulaması başarısız.
- 500 Internal Server Error: Sunucu hatası, çıkış yapılamadı.

 ### Parola Yenileme İsteği (Forgot Password)

Eğer şifrenizi unuttuysanız, yeni bir şifre belirlemek için bu endpoint'i kullanabilirsiniz.

**Endpoint:**

`POST /api/v1/auth/login`

**İstek Gövdesi (Request Body):**

- **Yol:** `/api/v1/auth/login`
- **Metod:** POST

- **Parametreler:**

| Parametre          | Tür     | Zorunluluk | Açıklama                     
| ----------------  | ------- | ---------- | ---------------------------- 
| `email` | string  | Zorunlu    | kayıtlı email adresi   |

```json
{
  "email": "john@example.com"
}


```
#### Yanıt (Response):
Başarılı bir giriş durumunda, aşağıdaki gibi bir yanıt alırsınız:

```json
{
  "message": "Şifre sıfırlama bağlantısı e-posta adresinize gönderildi."
}

```

**Hata Durumları:**

- 400 Bad Request: Eksik veya hatalı veri girişi.
- 500 Internal Server Error: Sunucu hatası, şifre yenileme isteği gönderilemedi.