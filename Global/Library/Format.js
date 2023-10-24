// utils.js
class Format {
    static Convert() {
        global.chartFormat = function (milliseconds) {
            if (typeof milliseconds !== "number" && !milliseconds) {
                console.log("Geçersiz Parametre - ChartFormat(): Parametre pozitif bir sayı olmalıdır.");
                return undefined;
            }
            try {
                const totalSeconds = Math.floor(milliseconds / 1000);
                const hours = Math.floor(totalSeconds / 3600);
        
                return hours;
            } catch (error) {
                console.error("Zaman dönüşümü sırasında bir hata oluştu:", error);
                return undefined;
            }
        } 
        global.convertTime = function (milliseconds,Type) {
            if (typeof milliseconds !== "number" && milliseconds !== undefined) {
                console.log("Geçersiz Parametre - süreçevir(): Parametre pozitif bir sayı olmalıdır.");
                return undefined;
            }
            try {
                const totalSeconds = Math.floor(milliseconds / 1000);
                const days = Math.floor(totalSeconds / 86400);
                const hours = Math.floor((totalSeconds % 86400) / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;
                switch (Type) {
                    case "Seen":
                        return hours === 0
                        ? minutes === 0
                            ? `${seconds} saniye`
                            : `${minutes} dk`
                        : `${days} gün ${hours} sa`;
                    case "Ladder":
                        return hours === 0
                        ? minutes === 0
                            ? `${seconds} saniye`
                            : `${minutes} dakika ${seconds} sn`
                        : `${hours} saat ${minutes} dk`;
                    case "Top":
                        return hours === 0
                        ? minutes === 0
                            ? `${seconds} saniye`
                            : `${minutes} dk ${seconds} sn`
                        : `${hours} sa ${minutes} dk`;
                    default:
                        return hours === 0
                        ? minutes === 0
                            ? `${seconds} saniye`
                            : `${minutes} dk ${seconds} sn`
                        : `${hours} sa ${minutes} dk ${seconds} sn`;
                }            
            } catch (error) {
                console.error("Zaman dönüşümü sırasında bir hata oluştu:", error);
                return undefined;
            }
        }

        const aylartoplam = {
            "01": "Ocak",
            "02": "Şubat",
            "03": "Mart",
            "04": "Nisan",
            "05": "Mayıs",
            "06": "Haziran",
            "07": "Temmuz",
            "08": "Ağustos",
            "09": "Eylül",
            "10": "Ekim",
            "11": "Kasım",
            "12": "Aralık"
        };
        global.aylar = aylartoplam;
        
        global.tarihsel = function (tarih) {
          const tarihObj = new Date(tarih);
          const tarihIstanbul = new Date(tarihObj.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));
          const tarihci = `${tarihIstanbul.getDate()} ${global.aylar[(tarihIstanbul.getMonth() + 1).toString().padStart(2, '0')]} ${tarihIstanbul.getFullYear()} ${tarihIstanbul.getHours().toString().padStart(2, '0')}:${tarihIstanbul.getMinutes().toString().padStart(2, '0')}`;
          return tarihci;
        };
        
        global.sayilariCevir = function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
        
        global.tarihHesapla = (date) => {
            const startedAt = Date.parse(date);
            var msecs = Math.abs(new Date() - startedAt);
        
            const years = Math.floor(msecs / (1000 * 60 * 60 * 24 * 365));
            msecs -= years * 1000 * 60 * 60 * 24 * 365;
            const months = Math.floor(msecs / (1000 * 60 * 60 * 24 * 30));
            msecs -= months * 1000 * 60 * 60 * 24 * 30;
            const weeks = Math.floor(msecs / (1000 * 60 * 60 * 24 * 7));
            msecs -= weeks * 1000 * 60 * 60 * 24 * 7;
            const days = Math.floor(msecs / (1000 * 60 * 60 * 24));
            msecs -= days * 1000 * 60 * 60 * 24;
            const hours = Math.floor(msecs / (1000 * 60 * 60));
            msecs -= hours * 1000 * 60 * 60;
            const mins = Math.floor((msecs / (1000 * 60)));
            msecs -= mins * 1000 * 60;
            const secs = Math.floor(msecs / 1000);
            msecs -= secs * 1000;
        
            var string = "";
            if (years > 0) string += `${years} yıl`;
            else if (months > 0) string += `${months} ay ${weeks > 0 ? weeks + " hafta" : ""}`;
            else if (weeks > 0) string += `${weeks} hafta ${days > 0 ? days + " gün" : ""}`;
            else if (days > 0) string += `${days} gün ${hours > 0 ? hours + " saat" : ""}`;
            else if (hours > 0) string += `${hours} saat ${mins > 0 ? mins + " dakika" : ""}`;
            else if (mins > 0) string += `${mins} dakika ${secs > 0 ? secs + " saniye" : ""}`;
            else if (secs > 0) string += `${secs} saniye`;
            else string += `saniyeler`;
        
            string = string.trim();
            return `\`${string} önce\``;
        };
    }
}
module.exports = { Format }
