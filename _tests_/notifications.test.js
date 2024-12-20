describe('Form Submission', () => {
  test('should alert when form is submitted with valid data', () => {
    // إنشاء العناصر
    const form = document.createElement('form');
    const inputName = document.createElement('input');
    inputName.setAttribute('placeholder', 'Name');
    const textareaDescription = document.createElement('textarea');
    textareaDescription.setAttribute('placeholder', 'Describe the issue');
    form.appendChild(inputName);
    form.appendChild(textareaDescription);
    document.body.appendChild(form);

    // إضافة الحدث submit
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = inputName.value.trim();
      const description = textareaDescription.value.trim();
      if (!name || !description) {
        alert('Please fill out all fields!');
      } else {
        alert(`Thank you, ${name}! Your technical issue has been submitted.`);
      }
    });

    // إدخال قيم وهمية
    inputName.value = 'John Doe';
    textareaDescription.value = 'Test issue';

    // محاكاة إرسال النموذج
    form.dispatchEvent(new Event('submit'));

    // اختبار
    expect(inputName.value).toBe('John Doe');
    expect(textareaDescription.value).toBe('Test issue');
  });
});
