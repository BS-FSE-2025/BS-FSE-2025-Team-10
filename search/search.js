document.addEventListener("DOMContentLoaded", () => {
    const searchPage = document.getElementById("search-page");
    const resultPage = document.getElementById("result-page");
    const form = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const searchResult = document.getElementById("search-result");
    const backButton = document.getElementById("back-button");
  
    // عند إرسال النموذج
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // منع التحديث الافتراضي للصفحة
      const query = searchInput.value.trim();
      if (!query) {
        alert("Please enter something to search!");
        return;
      }
  
      // عرض صفحة النتائج وإخفاء صفحة البحث
      searchPage.style.display = "none";
      resultPage.style.display = "block";
  
      // عرض النص في صفحة النتائج
      searchResult.textContent = `You searched for: "${query}"`;
    });
  
    // عند الضغط على زر الرجوع
    backButton.addEventListener("click", () => {
      // عرض صفحة البحث وإخفاء صفحة النتائج
      searchPage.style.display = "block";
      resultPage.style.display = "none";
  
      // مسح النص المدخل
      searchInput.value = "";
    });
  });
  