document.addEventListener('DOMContentLoaded', function() {
    // Show/hide other board field based on selection
    const affiliationBoard = document.getElementById('affiliationBoard');
    const otherBoardField = document.getElementById('otherBoard');
    
    affiliationBoard.addEventListener('change', function() {
        otherBoardField.style.display = this.value === 'other' ? 'block' : 'none';
        if (this.value !== 'other') {
            otherBoardField.value = '';
        }
    });
    
    // Form validation
    document.getElementById('schoolRegistrationForm').addEventListener('submit', function(e) {
        let isValid = true;
        
        // Check all required fields
        const requiredFields = [
            'schoolName', 'affiliationBoard', 'schoolAddress', 
            'city', 'district', 'state', 'hrName', 'hrDesignation',
            'mobileNo', 'email'
        ];
        
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                field.classList.add('is-invalid');
                isValid = false;
            } else {
                field.classList.remove('is-invalid');
            }
        });
        
        // Validate email format
        const email = document.getElementById('email');
        if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            email.classList.add('is-invalid');
            isValid = false;
        }
        
        // Validate mobile number (10 digits)
        const mobileNo = document.getElementById('mobileNo');
        if (mobileNo.value && !/^\d{10}$/.test(mobileNo.value)) {
            mobileNo.classList.add('is-invalid');
            isValid = false;
        }
        
        // Check terms checkbox
        if (!document.getElementById('terms').checked) {
            document.getElementById('terms').classList.add('is-invalid');
            isValid = false;
        }
        
        if (!isValid) {
            e.preventDefault();
            alert('Please fill all required fields correctly and accept the terms.');
        }
    });
});
