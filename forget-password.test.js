const { validateEmail, sendResetEmail } = require('./forget-password');

test('should validate a correct email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
});

test('should throw an error for an invalid email', async () => {
    await expect(sendResetEmail('invalid-email')).rejects.toThrow('Invalid email address');
});

test('should send a reset email for a valid email', async () => {
    const response = await sendResetEmail('test@example.com');
    expect(response).toEqual({ success: true, message: 'Reset email sent successfully.' });
});
