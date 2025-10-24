/**
 * Just Roll It - Premium Sushi Catering
 * JavaScript for multi-step form, interactive validation, WhatsApp redirect, and i18n
 */

// ===================================
// Translations
// ===================================
const translations = {
    he: {
        dir: 'rtl',
        header: {
            cta: 'השאר/י הזמנה'
        },
        hero: {
            title: 'קייטרינג סושי פרימיום לאירועים שלכם',
            subtitle: 'חוויה קולינרית יוצאת דופן עם מרכיבים טריים ושירות מקצועי',
            cta: 'הזמינו עכשיו'
        },
        advantages: {
            title: 'למה לבחור בנו?',
            fresh: { title: 'מרכיבים טריים', text: 'אנו משתמשים רק בדגים ומרכיבים איכותיים בדרגה הגבוהה ביותר' },
            catering: { title: 'קייטרינג במקום', text: 'הצוות המקצועי שלנו מגיע עם כל הציוד להכנה טרייה באירוע' },
            tasting: { title: 'טעימה מראש', text: 'אפשרות לטעימה לפני האירוע כדי להבטיח את שביעות הרצון המלאה' },
            experience: { title: 'שנות ניסיון', text: 'מעל 10 שנות ניסיון בהפקת אירועים ושמחות מכל הסוגים' }
        },
        packages: {
            title: 'חבילות האירועים שלנו',
            subtitle: 'בחרו את החבילה המתאימה לכם',
            mini: { title: 'חבילת Mini', subtitle: 'מושלם לאירועים קטנים', price: '₪80', perPerson: 'למנה' },
            standard: { title: 'חבילת Standard', subtitle: 'הבחירה המושלמת', price: '₪120', perPerson: 'למנה', badge: 'הכי פופולרי' },
            premium: { title: 'חבילת Premium', subtitle: 'חוויה יוקרתית מלאה', price: '₪180', perPerson: 'למנה' },
            cta: 'הזמינו עכשיו'
        },
        services: {
            title: 'שירותים נוספים לאירוע',
            subtitle: 'הפכו את האירוע למושלם עם שירותים מקצועיים נוספים',
            barman: { title: 'ברמן מקצועי', text: 'בר משקאות מלא עם ברמן מקצועי להכנת קוקטיילים ומשקאות' },
            dj: { title: 'DJ מנוסה', text: 'DJ מקצועי עם ציוד מתקדם לאווירה מושלמת' },
            officiant: { title: 'מלווה/ת אירוע', text: 'מלווה אירוע מקצועי לניהול ותיאום חלק של האירוע' },
            dancer: { title: 'רקדן ברייקדאנס', text: 'מופע ברייקדאנס מרהיב להפעלת האורחים' }
        },
        howItWorks: {
            title: 'איך זה עובד?',
            subtitle: 'שלושה שלבים פשוטים להזמנת הקייטרינג שלכם',
            step1: { title: 'בחירת חבילה', text: 'בחרו את החבילה המתאימה לאירוע שלכם ומלאו את הפרטים בטופס' },
            step2: { title: 'אישור ותיאום', text: 'נציג שלנו יצור איתכם קשר לאישור הפרטים ותיאום מועד לטעימה' },
            step3: { title: 'הכנה ואספקה', text: 'נגיע לאירוע עם כל הציוד ונכין סושי טרי ואיכותי במקום' }
        },
        testimonials: {
            title: 'מה הלקוחות שלנו אומרים'
        },
        contact: {
            title: 'השאירו פרטים ונחזור אליכם',
            subtitle: 'מלאו את הטופס ונציג שלנו יצור איתכם קשר בהקדם'
        },
        form: {
            step1: 'פרטים אישיים',
            step2: 'פרטי האירוע',
            step3: 'פרטים נוספים',
            fullName: 'שם מלא',
            phone: 'טלפון',
            eventDate: 'תאריך האירוע',
            guests: 'כמות מוזמנים',
            eventType: 'סוג האירוע',
            package: 'בחירת חבילה',
            services: 'שירותים נוספים (אופציונלי)',
            serviceBarman: 'ברמן מקצועי',
            serviceDJ: 'DJ מנוסה',
            serviceOfficiant: 'מלווה/ת אירוע',
            serviceDancer: 'רקדן ברייקדאנס',
            notes: 'הערות נוספות',
            prev: 'חזור',
            next: 'המשך',
            submit: 'שלח בוואטסאפ',
            required: '*'
        },
        footer: {
            about: 'קייטרינג סושי פרימיום לאירועים מכל הסוגים. מרכיבים טריים, שירות מקצועי וחוויה קולינרית בלתי נשכחת.',
            contact: 'יצירת קשר',
            follow: 'עקבו אחרינו',
            copyright: '© 2024 Just Roll It. כל הזכויות שמורות.'
        }
    },
    en: {
        dir: 'ltr',
        header: {
            cta: 'Leave Order'
        },
        hero: {
            title: 'Premium Sushi Catering for Your Events',
            subtitle: 'An exceptional culinary experience with fresh ingredients and professional service',
            cta: 'Order Now'
        },
        advantages: {
            title: 'Why Choose Us?',
            fresh: { title: 'Fresh Ingredients', text: 'We use only the highest quality fish and ingredients' },
            catering: { title: 'On-Site Catering', text: 'Our professional team arrives with all equipment for fresh preparation at your event' },
            tasting: { title: 'Pre-Event Tasting', text: 'Option to taste before the event to ensure complete satisfaction' },
            experience: { title: 'Years of Experience', text: 'Over 10 years of experience in producing events of all kinds' }
        },
        packages: {
            title: 'Our Event Packages',
            subtitle: 'Choose the package that suits you best',
            mini: { title: 'Mini Package', subtitle: 'Perfect for small events', price: '₪80', perPerson: 'per person' },
            standard: { title: 'Standard Package', subtitle: 'The perfect choice', price: '₪120', perPerson: 'per person', badge: 'Most Popular' },
            premium: { title: 'Premium Package', subtitle: 'Full luxury experience', price: '₪180', perPerson: 'per person' },
            cta: 'Order Now'
        },
        services: {
            title: 'Additional Event Services',
            subtitle: 'Make your event perfect with additional professional services',
            barman: { title: 'Professional Barman', text: 'Full beverage bar with professional bartender for cocktails and drinks' },
            dj: { title: 'Experienced DJ', text: 'Professional DJ with advanced equipment for the perfect atmosphere' },
            officiant: { title: 'Event Coordinator', text: 'Professional event coordinator for smooth event management' },
            dancer: { title: 'Break Dancer', text: 'Spectacular break dance performance to entertain guests' }
        },
        howItWorks: {
            title: 'How It Works?',
            subtitle: 'Three simple steps to order your catering',
            step1: { title: 'Choose Package', text: 'Select the package suitable for your event and fill in the details in the form' },
            step2: { title: 'Confirmation & Coordination', text: 'Our representative will contact you to confirm details and schedule a tasting' },
            step3: { title: 'Preparation & Delivery', text: 'We arrive at the event with all equipment and prepare fresh quality sushi on site' }
        },
        testimonials: {
            title: 'What Our Customers Say'
        },
        contact: {
            title: 'Leave Your Details and We\'ll Get Back to You',
            subtitle: 'Fill out the form and our representative will contact you shortly'
        },
        form: {
            step1: 'Personal Information',
            step2: 'Event Details',
            step3: 'Additional Details',
            fullName: 'Full Name',
            phone: 'Phone',
            eventDate: 'Event Date',
            guests: 'Number of Guests',
            eventType: 'Event Type',
            package: 'Choose Package',
            services: 'Additional Services (Optional)',
            serviceBarman: 'Professional Barman',
            serviceDJ: 'Experienced DJ',
            serviceOfficiant: 'Event Coordinator',
            serviceDancer: 'Break Dancer',
            notes: 'Additional Notes',
            prev: 'Back',
            next: 'Continue',
            submit: 'Send via WhatsApp',
            required: '*'
        },
        footer: {
            about: 'Premium sushi catering for events of all types. Fresh ingredients, professional service, and an unforgettable culinary experience.',
            contact: 'Contact Us',
            follow: 'Follow Us',
            copyright: '© 2024 Just Roll It. All Rights Reserved.'
        }
    },
    ru: {
        dir: 'ltr',
        header: {
            cta: 'Оставить заказ'
        },
        hero: {
            title: 'Премиум кейтеринг суши для ваших мероприятий',
            subtitle: 'Исключительный кулинарный опыт со свежими ингредиентами и профессиональным обслуживанием',
            cta: 'Заказать сейчас'
        },
        advantages: {
            title: 'Почему выбирают нас?',
            fresh: { title: 'Свежие ингредиенты', text: 'Мы используем только рыбу и ингредиенты высочайшего качества' },
            catering: { title: 'Кейтеринг на месте', text: 'Наша профессиональная команда приезжает со всем оборудованием для свежего приготовления на вашем мероприятии' },
            tasting: { title: 'Дегустация заранее', text: 'Возможность дегустации перед мероприятием для полного удовлетворения' },
            experience: { title: 'Многолетний опыт', text: 'Более 10 лет опыта в организации мероприятий всех видов' }
        },
        packages: {
            title: 'Наши пакеты мероприятий',
            subtitle: 'Выберите подходящий вам пакет',
            mini: { title: 'Пакет Mini', subtitle: 'Идеально для небольших мероприятий', price: '₪80', perPerson: 'на человека' },
            standard: { title: 'Пакет Standard', subtitle: 'Идеальный выбор', price: '₪120', perPerson: 'на человека', badge: 'Самый популярный' },
            premium: { title: 'Пакет Premium', subtitle: 'Полный роскошный опыт', price: '₪180', perPerson: 'на человека' },
            cta: 'Заказать сейчас'
        },
        services: {
            title: 'Дополнительные услуги для мероприятия',
            subtitle: 'Сделайте ваше мероприятие идеальным с дополнительными профессиональными услугами',
            barman: { title: 'Профессиональный бармен', text: 'Полный бар напитков с профессиональным барменом для коктейлей и напитков' },
            dj: { title: 'Опытный DJ', text: 'Профессиональный DJ с продвинутым оборудованием для идеальной атмосферы' },
            officiant: { title: 'Координатор мероприятия', text: 'Профессиональный координатор для плавного управления мероприятием' },
            dancer: { title: 'Брейк-дансер', text: 'Захватывающее выступление брейк-данса для развлечения гостей' }
        },
        howItWorks: {
            title: 'Как это работает?',
            subtitle: 'Три простых шага для заказа кейтеринга',
            step1: { title: 'Выбор пакета', text: 'Выберите подходящий пакет для вашего мероприятия и заполните форму' },
            step2: { title: 'Подтверждение и координация', text: 'Наш представитель свяжется с вами для подтверждения деталей и назначения дегустации' },
            step3: { title: 'Приготовление и доставка', text: 'Мы приезжаем на мероприятие со всем оборудованием и готовим свежие качественные суши на месте' }
        },
        testimonials: {
            title: 'Что говорят наши клиенты'
        },
        contact: {
            title: 'Оставьте свои данные и мы вам перезвоним',
            subtitle: 'Заполните форму и наш представитель свяжется с вами в ближайшее время'
        },
        form: {
            step1: 'Личная информация',
            step2: 'Детали мероприятия',
            step3: 'Дополнительные детали',
            fullName: 'Полное имя',
            phone: 'Телефон',
            eventDate: 'Дата мероприятия',
            guests: 'Количество гостей',
            eventType: 'Тип мероприятия',
            package: 'Выбрать пакет',
            services: 'Дополнительные услуги (опционально)',
            serviceBarman: 'Профессиональный бармен',
            serviceDJ: 'Опытный DJ',
            serviceOfficiant: 'Координатор мероприятия',
            serviceDancer: 'Брейк-дансер',
            notes: 'Дополнительные примечания',
            prev: 'Назад',
            next: 'Продолжить',
            submit: 'Отправить в WhatsApp',
            required: '*'
        },
        footer: {
            about: 'Премиум кейтеринг суши для мероприятий всех типов. Свежие ингредиенты, профессиональное обслуживание и незабываемый кулинарный опыт.',
            contact: 'Связаться с нами',
            follow: 'Следите за нами',
            copyright: '© 2024 Just Roll It. Все права защищены.'
        }
    }
};

$(document).ready(function() {

    // ===================================
    // Configuration
    // ===================================
    const WHATSAPP_PHONE = '972544563570'; // WhatsApp number in international format (without +)
    let currentStep = 1;
    const totalSteps = 3;
    let currentLang = 'he'; // Default language

    // ===================================
    // Language Detection & Switching
    // ===================================

    /**
     * Detect browser language
     */
    function detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('he')) return 'he';
        if (browserLang.startsWith('ru')) return 'ru';
        if (browserLang.startsWith('en')) return 'en';
        return 'he'; // default to Hebrew
    }

    /**
     * Apply translations to all elements
     */
    function applyTranslations(lang) {
        const t = translations[lang];

        // Update direction
        $('html').attr('dir', t.dir);
        $('html').attr('lang', lang);

        // Header
        $('.header-cta').text(t.header.cta);

        // Hero
        $('#hero .hero-title').text(t.hero.title);
        $('#hero .hero-subtitle').text(t.hero.subtitle);
        $('#hero .btn-primary').text(t.hero.cta);

        // Advantages
        $('#advantages .section-title').text(t.advantages.title);
        $('#advantages .advantage-card').eq(0).find('.advantage-title').text(t.advantages.fresh.title);
        $('#advantages .advantage-card').eq(0).find('.advantage-text').text(t.advantages.fresh.text);
        $('#advantages .advantage-card').eq(1).find('.advantage-title').text(t.advantages.catering.title);
        $('#advantages .advantage-card').eq(1).find('.advantage-text').text(t.advantages.catering.text);
        $('#advantages .advantage-card').eq(2).find('.advantage-title').text(t.advantages.tasting.title);
        $('#advantages .advantage-card').eq(2).find('.advantage-text').text(t.advantages.tasting.text);
        $('#advantages .advantage-card').eq(3).find('.advantage-title').text(t.advantages.experience.title);
        $('#advantages .advantage-card').eq(3).find('.advantage-text').text(t.advantages.experience.text);

        // Packages
        $('#packages .section-title').text(t.packages.title);
        $('#packages .section-subtitle').text(t.packages.subtitle);

        $('#packages .package-card').eq(0).find('.package-title').text(t.packages.mini.title);
        $('#packages .package-card').eq(0).find('.package-subtitle').text(t.packages.mini.subtitle);
        $('#packages .package-card').eq(0).find('.package-price').text(t.packages.mini.price);
        $('#packages .package-card').eq(0).find('.package-per').text(t.packages.mini.perPerson);

        $('#packages .package-card').eq(1).find('.package-title').text(t.packages.standard.title);
        $('#packages .package-card').eq(1).find('.package-subtitle').text(t.packages.standard.subtitle);
        $('#packages .package-card').eq(1).find('.package-price').text(t.packages.standard.price);
        $('#packages .package-card').eq(1).find('.package-per').text(t.packages.standard.perPerson);
        $('#packages .package-card').eq(1).find('.popular-badge').text(t.packages.standard.badge);

        $('#packages .package-card').eq(2).find('.package-title').text(t.packages.premium.title);
        $('#packages .package-card').eq(2).find('.package-subtitle').text(t.packages.premium.subtitle);
        $('#packages .package-card').eq(2).find('.package-price').text(t.packages.premium.price);
        $('#packages .package-card').eq(2).find('.package-per').text(t.packages.premium.perPerson);

        $('.btn-package').text(t.packages.cta);

        // Services
        $('#services .section-title').text(t.services.title);
        $('#services .section-subtitle').text(t.services.subtitle);
        $('#services .service-card').eq(0).find('.service-title').text(t.services.barman.title);
        $('#services .service-card').eq(0).find('.service-text').text(t.services.barman.text);
        $('#services .service-card').eq(1).find('.service-title').text(t.services.dj.title);
        $('#services .service-card').eq(1).find('.service-text').text(t.services.dj.text);
        $('#services .service-card').eq(2).find('.service-title').text(t.services.officiant.title);
        $('#services .service-card').eq(2).find('.service-text').text(t.services.officiant.text);
        $('#services .service-card').eq(3).find('.service-title').text(t.services.dancer.title);
        $('#services .service-card').eq(3).find('.service-text').text(t.services.dancer.text);

        // How It Works
        $('#how-it-works .section-title').text(t.howItWorks.title);
        $('#how-it-works .section-subtitle').text(t.howItWorks.subtitle);
        $('#how-it-works .step-card').eq(0).find('.step-title').text(t.howItWorks.step1.title);
        $('#how-it-works .step-card').eq(0).find('.step-text').text(t.howItWorks.step1.text);
        $('#how-it-works .step-card').eq(1).find('.step-title').text(t.howItWorks.step2.title);
        $('#how-it-works .step-card').eq(1).find('.step-text').text(t.howItWorks.step2.text);
        $('#how-it-works .step-card').eq(2).find('.step-title').text(t.howItWorks.step3.title);
        $('#how-it-works .step-card').eq(2).find('.step-text').text(t.howItWorks.step3.text);

        // Testimonials
        $('#testimonials .section-title').text(t.testimonials.title);

        // Contact
        $('#contact .section-title').text(t.contact.title);
        $('#contact .section-subtitle').text(t.contact.subtitle);

        // Form
        $('.progress-step').eq(0).find('.progress-label').text(t.form.step1);
        $('.progress-step').eq(1).find('.progress-label').text(t.form.step2);
        $('.progress-step').eq(2).find('.progress-label').text(t.form.step3);

        $('label[for="fullName"]').html(t.form.fullName + ' <span class="text-danger">' + t.form.required + '</span>');
        $('label[for="phone"]').html(t.form.phone + ' <span class="text-danger">' + t.form.required + '</span>');
        $('label[for="eventDate"]').html(t.form.eventDate + ' <span class="text-danger">' + t.form.required + '</span>');
        $('label[for="guests"]').html(t.form.guests + ' <span class="text-danger">' + t.form.required + '</span>');
        $('label[for="eventType"]').text(t.form.eventType);
        $('label[for="package"]').text(t.form.package);
        $('label[for="notes"]').text(t.form.notes);
        $('.services-label').text(t.form.services);

        // Update service checkbox labels
        $('label[for="serviceBarman"]').html('<i class="fas fa-cocktail"></i> ' + t.form.serviceBarman);
        $('label[for="serviceDJ"]').html('<i class="fas fa-music"></i> ' + t.form.serviceDJ);
        $('label[for="serviceOfficiant"]').html('<i class="fas fa-user-tie"></i> ' + t.form.serviceOfficiant);
        $('label[for="serviceDancer"]').html('<i class="fas fa-user-ninja"></i> ' + t.form.serviceDancer);

        $('.btn-prev').text(t.form.prev);
        $('.btn-next').text(t.form.next);
        $('.btn-submit .btn-text').text(t.form.submit);

        // Footer
        $('.footer-about').text(t.footer.about);
        $('.footer-links h5').eq(0).text(t.footer.contact);
        $('.footer-links h5').eq(1).text(t.footer.follow);
        $('.footer-copyright').text(t.footer.copyright);

        // Update language buttons
        $('.lang-btn').removeClass('active');
        $(`.lang-btn[data-lang="${lang}"]`).addClass('active');

        // Store preference
        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
    }

    /**
     * Initialize language on page load
     */
    function initLanguage() {
        // Check for stored preference first
        let storedLang = localStorage.getItem('preferredLanguage');

        // If no stored preference, detect browser language
        if (!storedLang) {
            storedLang = detectBrowserLanguage();
        }

        // Apply the language
        applyTranslations(storedLang);
    }

    /**
     * Language button click handlers
     */
    $('.lang-btn').on('click', function() {
        const selectedLang = $(this).data('lang');
        applyTranslations(selectedLang);
    });

    // Initialize language on page load
    initLanguage();

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
            services: [],
            notes: $('#notes').val().trim()
        };

        // Collect selected services
        $('input[name="services"]:checked').each(function() {
            formData.services.push($(this).val());
        });

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

        if (formData.services && formData.services.length > 0) {
            const servicesMap = {
                'barman': 'ברמן מקצועי',
                'dj': 'DJ מנוסה',
                'officiant': 'מלווה/ת אירוע',
                'breakdancer': 'רקדן ברייקדאנס'
            };
            const selectedServices = formData.services.map(s => servicesMap[s] || s).join(', ');
            message += `\n🎭 *שירותים נוספים:* ${selectedServices}\n`;
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
