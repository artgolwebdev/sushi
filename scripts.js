/**
 * Just Roll It - Premium Sushi Catering
 * JavaScript for multi-step form, interactive validation, and WhatsApp redirect
 */

$(document).ready(function() {

    // ===================================
    // Configuration
    // ===================================
    const WHATSAPP_PHONE = '972544563570'; // WhatsApp number in international format (without +)
    let currentStep = 1;
    const totalSteps = 3;

    // ===================================
    // Smooth Scrolling for Anchor Links
    // ===================================
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // ===================================
    // Multi-Step Form Navigation
    // ===================================

    /**
     * Show specific form step with animation
     */
    function showStep(stepNumber) {
        const currentStepEl = $(`.form-step[data-step="${currentStep}"]`);
        const nextStepEl = $(`.form-step[data-step="${stepNumber}"]`);

        // Fade out current step
        currentStepEl.removeClass('active').addClass('fade-out');

        setTimeout(function() {
            currentStepEl.removeClass('fade-out');

            // Update current step
            currentStep = stepNumber;

            // Show next step with animation
            nextStepEl.addClass('active');

            // Update progress indicator
            updateProgress();

            // Scroll to form top
            $('html, body').animate({
                scrollTop: $('#contactForm').offset().top - 100
            }, 400);
        }, 400);
    }

    /**
     * Update progress indicator
     */
    function updateProgress() {
        $('.progress-step').each(function() {
            const stepNum = parseInt($(this).data('step'));

            $(this).removeClass('active completed');

            if (stepNum < currentStep) {
                $(this).addClass('completed');
            } else if (stepNum === currentStep) {
                $(this).addClass('active');
            }
        });
    }

    /**
     * Next button click handler
     */
    $(document).on('click', '.btn-next', function() {
        const nextStep = parseInt($(this).data('next'));

        // Validate current step before proceeding
        if (validateCurrentStep()) {
            showStep(nextStep);
        } else {
            // Shake the form to indicate error
            $('.contact-form').addClass('shake');
            setTimeout(function() {
                $('.contact-form').removeClass('shake');
            }, 500);
        }
    });

    /**
     * Previous button click handler
     */
    $(document).on('click', '.btn-prev', function() {
        const prevStep = parseInt($(this).data('prev'));
        showStep(prevStep);
    });

    // ===================================
    // Form Validation
    // ===================================

    // Set minimum date to today (prevent past dates)
    const today = new Date().toISOString().split('T')[0];
    $('#eventDate').attr('min', today);

    // Phone number validation pattern (Israeli format)
    const phonePattern = /^0(5[0-9]|[2-4]|7[0-9]|8|9)[0-9]{7,8}$/;

    /**
     * Validate phone number
     */
    function validatePhone(phone) {
        phone = phone.replace(/[-\s]/g, '');
        return phonePattern.test(phone);
    }

    /**
     * Validate event date (must be in the future)
     */
    function validateDate(dateString) {
        if (!dateString) return false;
        const selectedDate = new Date(dateString);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate >= today;
    }

    /**
     * Show validation error on field
     */
    function showError(field, message) {
        field.addClass('is-invalid');
        field.removeClass('is-valid');
        if (message) {
            field.siblings('.invalid-feedback').text(message);
        }
    }

    /**
     * Show validation success on field
     */
    function showSuccess(field) {
        field.removeClass('is-invalid');
        field.addClass('is-valid');
    }

    /**
     * Clear validation state
     */
    function clearFieldValidation(field) {
        field.removeClass('is-invalid is-valid');
    }

    /**
     * Validate individual field
     */
    function validateField(field) {
        const fieldId = field.attr('id');
        const value = field.val().trim();

        switch(fieldId) {
            case 'fullName':
                if (value === '') {
                    showError(field, 'נא להזין שם מלא');
                    return false;
                } else if (value.length < 2) {
                    showError(field, 'שם חייב להכיל לפחות 2 תווים');
                    return false;
                }
                showSuccess(field);
                return true;

            case 'phone':
                if (value === '') {
                    showError(field, 'נא להזין מספר טלפון');
                    return false;
                } else if (!validatePhone(value)) {
                    showError(field, 'נא להזין מספר טלפון תקין (לדוגמה: 054-456-3570)');
                    return false;
                }
                showSuccess(field);
                return true;

            case 'eventDate':
                if (value === '') {
                    showError(field, 'נא לבחור תאריך לאירוע');
                    return false;
                } else if (!validateDate(value)) {
                    showError(field, 'נא לבחור תאריך עתידי');
                    return false;
                }
                showSuccess(field);
                return true;

            case 'guests':
                if (value === '') {
                    showError(field, 'נא להזין מספר מוזמנים');
                    return false;
                } else if (isNaN(value) || parseInt(value) < 1) {
                    showError(field, 'נא להזין מספר תקין (לפחות 1)');
                    return false;
                }
                showSuccess(field);
                return true;

            default:
                return true;
        }
    }

    /**
     * Validate current step
     */
    function validateCurrentStep() {
        let isValid = true;
        const currentStepEl = $(`.form-step[data-step="${currentStep}"]`);

        // Find all required fields in current step
        currentStepEl.find('input[required], select[required], textarea[required]').each(function() {
            if (!validateField($(this))) {
                isValid = false;
            }
        });

        return isValid;
    }

    /**
     * Real-time validation on input
     */
    $('.form-control').on('input', function() {
        if ($(this).hasClass('is-invalid') || $(this).hasClass('is-valid')) {
            validateField($(this));
        }
    });

    /**
     * Validation on blur
     */
    $('.form-control').on('blur', function() {
        // Only validate required fields or if they have value
        if ($(this).prop('required') || $(this).val().trim() !== '') {
            validateField($(this));
        }
    });

    /**
     * Clear validation on focus
     */
    $('.form-control').on('focus', function() {
        if (!$(this).hasClass('is-valid')) {
            clearFieldValidation($(this));
        }
    });

    // ===================================
    // WhatsApp Form Submission
    // ===================================

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        // Validate all fields one more time
        if (!validateCurrentStep()) {
            return;
        }

        // Collect form data
        const formData = {
            fullName: $('#fullName').val().trim(),
            phone: $('#phone').val().trim(),
            eventDate: $('#eventDate').val(),
            guests: $('#guests').val(),
            eventType: $('#eventType').val(),
            package: $('#package').val(),
            notes: $('#notes').val().trim()
        };

        // Format date nicely
        const dateObj = new Date(formData.eventDate);
        const formattedDate = dateObj.toLocaleDateString('he-IL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Build WhatsApp message
        let message = `🍣 *הזמנת קייטרינג סושי - Just Roll It*\n\n`;
        message += `👤 *שם:* ${formData.fullName}\n`;
        message += `📱 *טלפון:* ${formData.phone}\n`;
        message += `📅 *תאריך האירוע:* ${formattedDate}\n`;
        message += `👥 *כמות מוזמנים:* ${formData.guests || 'לא צוין'}\n`;

        if (formData.eventType) {
            const eventTypes = {
                'wedding': 'חתונה',
                'bar-mitzvah': 'בר/בת מצווה',
                'birthday': 'יום הולדת',
                'corporate': 'אירוע עסקי',
                'private': 'אירוע פרטי',
                'other': 'אחר'
            };
            message += `🎉 *סוג האירוע:* ${eventTypes[formData.eventType] || formData.eventType}\n`;
        }

        if (formData.package) {
            const packages = {
                'mini': 'חבילת Mini - ₪80 למנה',
                'standard': 'חבילת Standard - ₪120 למנה',
                'premium': 'חבילת Premium - ₪180 למנה',
                'custom': 'מעוניין/ת בהצעה מותאמת אישית'
            };
            message += `📦 *חבילה:* ${packages[formData.package] || formData.package}\n`;
        }

        if (formData.notes) {
            message += `\n📝 *הערות נוספות:*\n${formData.notes}`;
        }

        // Show loading state
        const submitBtn = $('.btn-submit');
        const btnText = submitBtn.find('.btn-text');
        const btnLoader = submitBtn.find('.btn-loader');

        btnText.hide();
        btnLoader.show();
        submitBtn.prop('disabled', true);

        // Small delay for UX
        setTimeout(function() {
            // Encode message for WhatsApp URL
            const encodedMessage = encodeURIComponent(message);

            // Build WhatsApp URL
            const whatsappURL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

            // Open WhatsApp in new tab
            window.open(whatsappURL, '_blank');

            // Reset button state
            btnText.show();
            btnLoader.hide();
            submitBtn.prop('disabled', false);

            // Show success message
            $('#successMessage').slideDown(400);

            // Reset form after 2 seconds
            setTimeout(function() {
                $('#contactForm')[0].reset();
                $('.form-control').removeClass('is-valid is-invalid');

                // Return to step 1
                showStep(1);

                // Hide success message after 6 seconds
                setTimeout(function() {
                    $('#successMessage').slideUp(400);
                }, 6000);
            }, 2000);

        }, 800);
    });

    // ===================================
    // Header Scroll Effect
    // ===================================
    $(window).on('scroll', function() {
        const header = $('.header-main');
        if ($(window).scrollTop() > 50) {
            header.css('box-shadow', '0 4px 20px rgba(0, 0, 0, 0.12)');
        } else {
            header.css('box-shadow', '0 4px 12px rgba(0, 0, 0, 0.08)');
        }
    });

    // ===================================
    // Animate on Scroll (Optional Enhancement)
    // ===================================
    function animateOnScroll() {
        const elements = $('.advantage-card, .package-card, .step-card, .testimonial-card');

        elements.each(function() {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < windowBottom - 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    }

    // Set initial state for animation
    $('.advantage-card, .package-card, .step-card, .testimonial-card').css({
        'opacity': '0',
        'transform': 'translateY(30px)',
        'transition': 'all 0.6s ease'
    });

    // Trigger animation on scroll
    $(window).on('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load

    // ===================================
    // Phone Number Formatting (Optional)
    // ===================================
    $('#phone').on('input', function() {
        let value = $(this).val().replace(/\D/g, '');

        if (value.length > 10) {
            value = value.slice(0, 10);
        }

        if (value.length > 3 && value.length <= 6) {
            value = value.slice(0, 3) + '-' + value.slice(3);
        } else if (value.length > 6) {
            value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6);
        }

        $(this).val(value);
    });

    // ===================================
    // Package Selection from Homepage
    // ===================================
    // If user clicks on package button, scroll to form and pre-select package
    $('.btn-package').on('click', function(e) {
        const packageCard = $(this).closest('.package-card');
        let packageType = 'standard'; // default

        if (packageCard.find('.package-title').text().includes('Mini')) {
            packageType = 'mini';
        } else if (packageCard.find('.package-title').text().includes('Premium')) {
            packageType = 'premium';
        }

        // Set package selection
        $('#package').val(packageType);

        // Add visual feedback
        $('#package').addClass('is-valid');
        setTimeout(function() {
            $('#package').removeClass('is-valid');
        }, 2000);
    });

    // ===================================
    // Keyboard Navigation
    // ===================================
    $(document).on('keydown', function(e) {
        // Enter key on input fields in step 1 and 2 should trigger next button
        if (e.key === 'Enter' && currentStep < totalSteps) {
            const activeInput = $(document.activeElement);
            if (activeInput.is('input[type="text"], input[type="tel"], input[type="date"], input[type="number"]')) {
                e.preventDefault();
                $(`.btn-next[data-next="${currentStep + 1}"]`).click();
            }
        }
    });

    // ===================================
    // Console Welcome Message
    // ===================================
    console.log('%c Just Roll It 🍣', 'font-size: 24px; font-weight: bold; color: #D4AF37;');
    console.log('%c קייטרינג סושי פרימיום לאירועים', 'font-size: 14px; color: #0B2545;');
    console.log('%c Multi-step form with WhatsApp integration loaded!', 'font-size: 12px; color: #666;');
    console.log('%c Contact: +972-54-456-3570', 'font-size: 12px; color: #25D366;');

});
