const { createApp } = Vue;

createApp({
    data() {
        return {
            mobileMenuOpen: false,
            showBackToTop: false,
            stats: {
                users: '10,000',
                orders: '50,000',
                uptime: '99.9'
            },
            packages: [
                {
                    id: 1,
                    name: 'GPT Plus 月付',
                    price: '128',
                    originalPrice: '144',
                    duration: '1个月',
                    features: [
                        'GPT-4 完整访问',
                        '插件功能支持',
                        '高级数据分析',
                        '微信支付',
                        '5分钟内到账'
                    ]
                },
                {
                    id: 2,
                    name: 'GPT Plus 季付',
                    price: '348',
                    originalPrice: '432',
                    duration: '3个月',
                    features: [
                        'GPT-4 完整访问',
                        '插件功能支持',
                        '高级数据分析',
                        '微信支付',
                        '5分钟内到账',
                        '节省 ¥84'
                    ]
                },
                {
                    id: 3,
                    name: 'GPT Plus 年付',
                    price: '1188',
                    originalPrice: '1728',
                    duration: '12个月',
                    features: [
                        'GPT-4 完整访问',
                        '插件功能支持',
                        '高级数据分析',
                        '微信支付',
                        '5分钟内到账',
                        '节省 ¥540',
                        '免费赠送1个月'
                    ]
                }
            ],
            features: [
                {
                    id: 1,
                    icon: 'fas fa-shield-alt',
                    title: '安全可靠',
                    description: '采用银行级安全加密，保护您的支付信息和账户安全'
                },
                {
                    id: 2,
                    icon: 'fas fa-bolt',
                    title: '极速充值',
                    description: '支付成功后5分钟内自动充值到您的GPT账户，无需等待'
                },
                {
                    id: 3,
                    icon: 'fab fa-weixin',
                    title: '微信支付',
                    description: '支持微信支付，操作简单便捷，无需国外信用卡'
                },
                {
                    id: 4,
                    icon: 'fas fa-percentage',
                    title: '价格优惠',
                    description: '比官方价格更优惠，长期用户享受更多折扣'
                },
                {
                    id: 5,
                    icon: 'fas fa-mobile-alt',
                    title: '移动支付',
                    description: '支持微信扫码支付，手机操作更加便捷'
                },
                {
                    id: 6,
                    icon: 'fas fa-sync',
                    title: '自动续费',
                    description: '支持自动续费功能，避免忘记充值导致服务中断'
                }
            ],
            faqs: [
                {
                    question: '如何充值GPT Plus会员？',
                    answer: '选择您需要的套餐，点击"立即购买"按钮，跳转到发卡平台完成微信支付即可。支付成功后5分钟内会自动充值到您的GPT账户。',
                    open: false
                },
                {
                    question: '支持哪些支付方式？',
                    answer: '我们目前只支持微信支付，操作简单便捷，无需国外信用卡。',
                    open: false
                },
                {
                    question: '充值后多久能到账？',
                    answer: '正常情况下，支付成功后5分钟内会自动充值到您的GPT账户。如遇特殊情况，我们会及时处理。',
                    open: false
                },
                {
                    question: '如果充值失败怎么办？',
                    answer: '如果充值失败，请立即联系我们的微信客服。我们会核实情况后为您重新充值或退款。',
                    open: false
                },
                {
                    question: '可以购买GPT账号吗？',
                    answer: '是的，我们提供GPT账号购买服务。账号都是经过验证的，安全可靠。',
                    open: false
                },
                {
                    question: '服务是否稳定可靠？',
                    answer: '我们拥有99.9%的服务可用性，专业的技术团队确保服务稳定运行。',
                    open: false
                }
            ],
            contacts: [
                {
                    id: 1,
                    icon: 'fab fa-weixin',
                    title: '微信客服',
                    description: '添加微信客服，获得即时帮助',
                    action: '添加微信',
                    link: 'https://wj.qq.com/s2/12345678'
                }
            ]
        }
    },
    mounted() {
        this.initScrollListener();
        this.initSmoothScroll();
        this.initIntersectionObserver();
    },
    methods: {
        // 移动端菜单切换
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        
        closeMobileMenu() {
            this.mobileMenuOpen = false;
        },
        
        // 滚动监听
        initScrollListener() {
            window.addEventListener('scroll', () => {
                this.showBackToTop = window.scrollY > 300;
            });
        },
        
        // 平滑滚动
        initSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        },
        
        // 滚动到指定区域
        scrollToPricing() {
            const pricingSection = document.querySelector('#pricing');
            if (pricingSection) {
                pricingSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        },
        
        // 返回顶部
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        
        // FAQ切换
        toggleFaq(index) {
            this.faqs[index].open = !this.faqs[index].open;
        },
        
        // 跳转到支付页面 - 接入真实的发卡平台
        redirectToPayment(package) {
            // 直接跳转到真实的发卡平台
            const paymentUrl = 'https://sc.i6ls.com//links/75DF1115';
            
            // 显示确认对话框
            if (confirm(`确认购买 ${package.name} 吗？\n价格：¥${package.price}\n\n点击确定后将跳转到支付页面`)) {
                // 跳转到发卡平台
                window.open(paymentUrl, '_blank');
            }
        },
        
        // 初始化交叉观察器（用于动画效果）
        initIntersectionObserver() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            // 观察需要动画的元素
            document.querySelectorAll('.package-card, .feature-card, .contact-card').forEach(el => {
                observer.observe(el);
            });
        },
        
        // 数字动画
        animateNumbers() {
            const stats = document.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                const target = parseInt(stat.textContent.replace(/,/g, ''));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current).toLocaleString() + '+';
                }, 16);
            });
        }
    }
}).mount('#app');

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 添加页面加载动画
    document.body.classList.add('loaded');
    
    // 初始化数字动画（当滚动到统计区域时）
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 触发数字动画
                    const app = document.querySelector('#app').__vue_app__;
                    if (app) {
                        app.animateNumbers();
                    }
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(statsSection);
    }
    
    // 添加键盘快捷键支持
    document.addEventListener('keydown', function(e) {
        // ESC键关闭移动端菜单
        if (e.key === 'Escape') {
            const app = document.querySelector('#app').__vue_app__;
            if (app && app.mobileMenuOpen) {
                app.closeMobileMenu();
            }
        }
        
        // 空格键滚动到价格区域
        if (e.key === ' ' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            const app = document.querySelector('#app').__vue_app__;
            if (app) {
                app.scrollToPricing();
            }
        }
    });
    
    // 添加触摸手势支持（移动端）
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // 向上滑动，滚动到价格区域
                const app = document.querySelector('#app').__vue_app__;
                if (app) {
                    app.scrollToPricing();
                }
            } else {
                // 向下滑动，返回顶部
                const app = document.querySelector('#app').__vue_app__;
                if (app) {
                    app.scrollToTop();
                }
            }
        }
    }
});

// 添加页面可见性API支持
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '😴 回来继续充值GPT吧！';
    } else {
        document.title = 'GPT代充平台 - 官方价格，优惠充值';
    }
});

// 添加错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
    // 可以在这里添加错误上报逻辑
});

// 添加性能监控
window.addEventListener('load', function() {
    // 页面加载性能监控
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('页面加载时间:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    }
}); 