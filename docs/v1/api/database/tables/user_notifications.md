
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
