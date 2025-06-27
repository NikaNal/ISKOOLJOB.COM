// Form validation for school vacancy submission
document.getElementById('vacancyForm').addEventListener('submit', function(e) {
    // Basic validation
    const jobCategory = document.getElementById('jobCategory').value;
    const jobTitle = document.getElementById('jobTitle').value;
    
    if (!jobCategory || !jobTitle) {
        e.preventDefault();
        alert('Please fill in all required fields');
        return false;
    }
    
    // Additional validation can be added here
});

// Dynamic form adjustments based on job category
document.getElementById('jobCategory').addEventListener('change', function() {
    const category = this.value;
    // You can show/hide fields based on category selection
});
