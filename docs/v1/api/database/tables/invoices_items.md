### Fatura Öğeleri (Invoice Items) Tablosu

### Tablo adı : `invoices_items`

"Fatura Öğeleri" tablosu, fatura öğelerinin kaydedildiği bir tabloyu temsil eder. Bu tablo, her bir fatura için ayrı ayrı öğelerin listesini içerir.

| Alan Adı        | Tür               | Zorunlu | Açıklama                                 | Örnek Değer                 |
| --------------- | ----------------- | ------- | ---------------------------------------- | --------------------------- |
| `item_id`       | int               | Zorunlu | Fatura öğesi kimliği (benzersiz)         | unique id, sistem belirler   |
| `invoice_id`    | int               | Zorunlu | İlgili faturanın kimliği                 | Fatura kimliği              |
| `name`          | varchar           | Zorunlu | Ürün veya hizmet adı                     | "Ürün 1" gibi               |
| `quantity`      | int               | Zorunlu | Ürün veya hizmet miktarı                 | 2                           |
| `price`         | decimal(10, 2)    | Zorunlu | Ürün veya hizmet birim fiyatı            | 50.00                       |
| `total_price`   | decimal(10, 2)    | Zorunlu | Toplam öğe fiyatı (miktar x birim fiyat) | 100.00                      |

Bu tablo, her bir fatura için ayrı ayrı kayıtlar içerir ve her kayıt, bir fatura öğesini temsil eder. Öğelerin adı, miktarı ve birim fiyatı gibi detaylar bu tabloda saklanır.


```csharp

public class Invoice
{
    public int InvoiceId { get; set; }
    public string InvoiceNumber { get; set; }
    
    // Fatura öğeleri koleksiyonu
    public virtual ICollection<InvoiceItem> InvoiceItems { get; set; }
}

```
Aynı şekilde, InvoiceItem sınıfında faturaya olan referansı virtual olarak işaretleyebilirsiniz:

```csharp
public class InvoiceItem
{
    public int InvoiceItemId { get; set; }
    public string Name { get; set; }
    public int Quantity { get; set; }
    public decimal Price { get; set; }
    
    // İlgili fatura
    public virtual Invoice Invoice { get; set; }
    public int InvoiceId { get; set; }
}
```

`virtual` anahtar kelimesi, Entity Framework Core'un ilişkili verileri yüklerken gereken proxy sınıfları oluşturmasına ve ilişkili verilere gecikmeli yükleme desteği sunmasına yardımcı olur.
Bu sayede ilişkili verilere eriştiğinizde, Entity Framework sorguları otomatik olarak bu verileri veritabanından yükler.
