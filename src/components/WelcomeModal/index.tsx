import React, { useState, useEffect } from 'react';
import styles from './welcomeModal.module.css';

interface WelcomeModalProps {}

const WelcomeModal: React.FC<WelcomeModalProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // 检查用户是否已经同意过（使用sessionStorage，每次打开新网页时显示，页面内切换不显示）
    const agreed = sessionStorage.getItem('medical-disclaimer-agreed');
    if (!agreed) {
      // 延迟显示，让页面先加载完成
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setHasAgreed(true);
    }
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem('medical-disclaimer-agreed', 'true');
    setIsAnimatingOut(true);

    // 等待动画完成后才完全隐藏组件
    setTimeout(() => {
      setIsVisible(false);
      setHasAgreed(true);
      setIsAnimatingOut(false);
    }, 500); // 与CSS动画时间一致
  };

  if (hasAgreed) {
    return null;
  }

  return (
    <>
      {/* 背景遮罩 */}
      <div
        className={`${styles.backdrop} ${isVisible || isAnimatingOut ? styles.backdropVisible : ''} ${isAnimatingOut ? styles.backdropAnimatingOut : ''}`}
        onClick={handleAgree}
      />

      {/* 弹出窗口 */}
      <div
        className={`${styles.modal} ${isVisible ? styles.modalVisible : ''} ${isAnimatingOut ? styles.modalAnimatingOut : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className={styles.modalContent}>
          {/* 警告图标 */}
          <div className={styles.warningIcon}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="40"
                cy="40"
                r="38"
                fill="#FFA500"
                fillOpacity="0.1"
                stroke="#FFA500"
                strokeWidth="4"
              />
              <path
                d="M40 20L40 45"
                stroke="#FFA500"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle
                cx="40"
                cy="55"
                r="3"
                fill="#FFA500"
              />
            </svg>
          </div>

          {/* 标题 */}
          <h2 id="modal-title" className={styles.title}>
            在开始之前
          </h2>

          {/* 说明文字 */}
          <p className={styles.description}>
            本笔记本只供医学相关专业人士复习使用，<br />
            不能使用其中的任何资料指导临床！
          </p>

          {/* 同意按钮 */}
          <button
            className={styles.agreeButton}
            onClick={handleAgree}
            aria-label="同意并继续"
          >
            我同意
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomeModal;
