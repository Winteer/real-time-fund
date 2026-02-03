'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Announcement from "./components/Announcement";

function PlusIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 6l1-2h6l1 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 6l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M19.4 15a7.97 7.97 0 0 0 .1-2l2-1.5-2-3.5-2.3.5a8.02 8.02 0 0 0-1.7-1l-.4-2.3h-4l-.4 2.3a8.02 8.02 0 0 0-1.7 1l-2.3-.5-2 3.5 2 1.5a7.97 7.97 0 0 0 .1 2l-2 1.5 2 3.5 2.3-.5a8.02 8.02 0 0 0 1.7 1l.4 2.3h4l.4-2.3a8.02 8.02 0 0 0 1.7-1l2.3.5 2-3.5-2-1.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RefreshIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M4 12a8 8 0 0 1 12.5-6.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 5h3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12a8 8 0 0 1-12.5 6.9" stroke="currentColor" strokeWidth="2" />
      <path d="M8 19H5v-3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ChevronIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SortIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M3 7h18M6 12h12M9 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GridIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ListIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon({ filled, ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? "var(--accent)" : "none"}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RefreshCwIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M21 12a9 9 0 0 0-9-9c-4.97 0-9 4.03-9 9 0 4.97 4.03 9 9 9 2.52 0 4.74-1.07 6.32-2.76l-2.64-2.64A5.96 5.96 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.8 0 3.4.76 4.5 1.97l-1.68 1.68A7.96 7.96 0 0 0 12 6c-4.42 0-8 3.58-8 8s3.58 8 8 8c4.42 0 8-3.58 8-8h-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AlertCircleIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M12 8v4M12 16h.01M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EditIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Stat({ label, value, delta }) {
  const dir = delta > 0 ? 'up' : delta < 0 ? 'down' : '';
  return (
    <div className="stat">
      <span className="label">{label}</span>
      <span className={`value ${dir}`}>{value}</span>
    </div>
  );
}

export default function HomePage() {
  const [funds, setFunds] = useState([]);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const timerRef = useRef(null);
  const refreshingRef = useRef(false);

  // 刷新频率状态
  const [refreshMs, setRefreshMs] = useState(30000);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [tempSeconds, setTempSeconds] = useState(30);

  // 全局刷新状态
  const [refreshing, setRefreshing] = useState(false);

  // 收起/展开状态
  const [collapsedCodes, setCollapsedCodes] = useState(new Set());

  // 自选状态
  const [favorites, setFavorites] = useState(new Set());
  const [currentTab, setCurrentTab] = useState('all');

  // 顶部主标签页状态
  const [mainTab, setMainTab] = useState('favorites'); // favorites, holding, profit

  // 排序状态
  const [sortBy, setSortBy] = useState('default'); // default, name, yield, code

  // 视图模式
  const [viewMode, setViewMode] = useState('card'); // card, list

  // 持有基金相关状态
  const [holdingFunds, setHoldingFunds] = useState([]);
  const [holdingCode, setHoldingCode] = useState('');
  const [holdingAmount, setHoldingAmount] = useState('');
  const [holdingLoading, setHoldingLoading] = useState(false);
  const [holdingError, setHoldingError] = useState('');
  const [holdingCollapsedCodes, setHoldingCollapsedCodes] = useState(new Set());
  const [holdingFavorites, setHoldingFavorites] = useState(new Set());
  const [holdingCurrentTab, setHoldingCurrentTab] = useState('all');
  const [holdingSortBy, setHoldingSortBy] = useState('default');
  const [holdingViewMode, setHoldingViewMode] = useState('card');

  // 弹窗状态
  const [addHoldingModalOpen, setAddHoldingModalOpen] = useState(false);
  const [selectedFund, setSelectedFund] = useState(null);
  const [modalAmount, setModalAmount] = useState('');
  const [modalError, setModalError] = useState('');
  
  // 修改持有总额弹窗状态
  const [editHoldingModalOpen, setEditHoldingModalOpen] = useState(false);
  const [editingFund, setEditingFund] = useState(null);
  const [editModalAmount, setEditModalAmount] = useState('');
  const [editModalError, setEditModalError] = useState('');

  // 删除确认弹窗状态
  const [deleteConfirmModalOpen, setDeleteConfirmModalOpen] = useState(false);
  const [deleteFundCode, setDeleteFundCode] = useState('');
  const [isHoldingFund, setIsHoldingFund] = useState(false); // 标记是否是持有基金

  // 持有更新相关状态
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [updateErrorModalOpen, setUpdateErrorModalOpen] = useState(false);
  const [lastUpdateDate, setLastUpdateDate] = useState(''); // 存储上次更新的日期，格式：YYYY-MM-DD

  const toggleFavorite = (code) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      localStorage.setItem('favorites', JSON.stringify(Array.from(next)));
      if (next.size === 0) setCurrentTab('all');
      return next;
    });
  };

  const toggleCollapse = (code) => {
    setCollapsedCodes(prev => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      // 同步到本地存储
      localStorage.setItem('collapsedCodes', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  // 持有基金相关函数
  const toggleHoldingFavorite = (code) => {
    setHoldingFavorites(prev => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      localStorage.setItem('holdingFavorites', JSON.stringify(Array.from(next)));
      if (next.size === 0) setHoldingCurrentTab('all');
      return next;
    });
  };

  const toggleHoldingCollapse = (code) => {
    setHoldingCollapsedCodes(prev => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      localStorage.setItem('holdingCollapsedCodes', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const addHoldingFund = async (e) => {
    e.preventDefault();
    setHoldingError('');
    const clean = holdingCode.trim();
    if (!clean) {
      setHoldingError('请输入基金编号');
      return;
    }
    if (holdingFunds.some((f) => f.code === clean)) {
      setHoldingError('该基金已添加');
      return;
    }
    const amount = parseFloat(holdingAmount.trim());
    if (isNaN(amount) || amount <= 0) {
      setHoldingError('请输入有效的持有总额');
      return;
    }
    setHoldingLoading(true);
    try {
      const data = await fetchFundData(clean);
      // 添加持有总额信息
      const fundWithAmount = {
        ...data,
        holdingAmount: amount
      };
      const next = [fundWithAmount, ...holdingFunds];
      setHoldingFunds(next);
      localStorage.setItem('holdingFunds', JSON.stringify(next));
      setHoldingCode('');
      setHoldingAmount('');
    } catch (e) {
      setHoldingError(e.message || '添加失败');
    } finally {
      setHoldingLoading(false);
    }
  };

  const removeHoldingFund = (removeCode) => {
    const next = holdingFunds.filter((f) => f.code !== removeCode);
    setHoldingFunds(next);
    localStorage.setItem('holdingFunds', JSON.stringify(next));

    // 同步删除展开收起状态
    setHoldingCollapsedCodes(prev => {
      if (!prev.has(removeCode)) return prev;
      const nextSet = new Set(prev);
      nextSet.delete(removeCode);
      localStorage.setItem('holdingCollapsedCodes', JSON.stringify(Array.from(nextSet)));
      return nextSet;
    });

    // 同步删除自选状态
    setHoldingFavorites(prev => {
      if (!prev.has(removeCode)) return prev;
      const nextSet = new Set(prev);
      nextSet.delete(removeCode);
      localStorage.setItem('holdingFavorites', JSON.stringify(Array.from(nextSet)));
      if (nextSet.size === 0) setHoldingCurrentTab('all');
      return nextSet;
    });
  };

  const toggleHoldingViewMode = () => {
    const nextMode = holdingViewMode === 'card' ? 'list' : 'card';
    setHoldingViewMode(nextMode);
    localStorage.setItem('holdingViewMode', nextMode);
  };

  // 打开添加到持有基金弹窗
  const openAddToHoldingModal = (fund) => {
    setSelectedFund(fund);
    setModalAmount('');
    setModalError('');
    setAddHoldingModalOpen(true);
  };

  // 关闭添加到持有基金弹窗
  const closeAddToHoldingModal = () => {
    setAddHoldingModalOpen(false);
    setSelectedFund(null);
    setModalAmount('');
    setModalError('');
  };

  // 添加到持有基金
  const addToHolding = async (e) => {
    e.preventDefault();
    setModalError('');
    const amount = parseFloat(modalAmount.trim());
    if (isNaN(amount) || amount <= 0) {
      setModalError('请输入有效的持有金额');
      return;
    }
    if (!selectedFund) {
      setModalError('未选择基金');
      return;
    }
    // 检查是否已经在持有基金中
    if (holdingFunds.some((f) => f.code === selectedFund.code)) {
      setModalError('该基金已在持有基金中');
      return;
    }
    try {
      // 添加持有总额信息
      const fundWithAmount = {
        ...selectedFund,
        holdingAmount: amount
      };
      const next = [fundWithAmount, ...holdingFunds];
      setHoldingFunds(next);
      localStorage.setItem('holdingFunds', JSON.stringify(next));
      closeAddToHoldingModal();
    } catch (e) {
      setModalError(e.message || '添加失败');
    }
  };

  // 检查是否在可更新时间范围内（每天下午3点至晚上11点）
  const isUpdateTimeValid = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 15 && hour < 23;
  };

  // 打开持有更新确认弹窗
  const openUpdateModal = () => {
    if (isUpdateTimeValid()) {
      setUpdateModalOpen(true);
    } else {
      setUpdateErrorModalOpen(true);
    }
  };

  // 关闭持有更新确认弹窗
  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
  };

  // 关闭持有更新错误弹窗
  const closeUpdateErrorModal = () => {
    setUpdateErrorModalOpen(false);
  };

  // 打开修改持有总额弹窗
  const openEditHoldingModal = (fund) => {
    setEditingFund(fund);
    setEditModalAmount(fund.holdingAmount?.toString() || '');
    setEditModalError('');
    setEditHoldingModalOpen(true);
  };

  // 关闭修改持有总额弹窗
  const closeEditHoldingModal = () => {
    setEditHoldingModalOpen(false);
    setEditingFund(null);
    setEditModalAmount('');
    setEditModalError('');
  };

  // 修改持有总额
  const editHoldingAmount = () => {
    if (!editingFund) return;
    
    const amount = parseFloat(editModalAmount.trim());
    if (isNaN(amount) || amount <= 0) {
      setEditModalError('请输入有效的持有总额');
      return;
    }
    
    // 更新持有基金列表
    const updatedFunds = holdingFunds.map(fund => {
      if (fund.code === editingFund.code) {
        return {
          ...fund,
          holdingAmount: amount
        };
      }
      return fund;
    });
    
    setHoldingFunds(updatedFunds);
    localStorage.setItem('holdingFunds', JSON.stringify(updatedFunds));
    closeEditHoldingModal();
  };

  // 打开删除确认弹窗
  const openDeleteConfirmModal = (code, isHolding = false) => {
    setDeleteFundCode(code);
    setIsHoldingFund(isHolding);
    setDeleteConfirmModalOpen(true);
  };

  // 关闭删除确认弹窗
  const closeDeleteConfirmModal = () => {
    setDeleteConfirmModalOpen(false);
    setDeleteFundCode('');
    setIsHoldingFund(false);
  };

  // 确认删除
  const confirmDelete = () => {
    if (deleteFundCode) {
      if (isHoldingFund) {
        removeHoldingFund(deleteFundCode);
      } else {
        removeFund(deleteFundCode);
      }
    }
    closeDeleteConfirmModal();
  };

  // 导出持有基金数据
  const exportHoldingFunds = () => {
    if (holdingFunds.length === 0) {
      alert('暂无持有基金数据');
      return;
    }
    
    // 格式化为逗号分隔的文本
    const content = holdingFunds.map(fund => {
      return `${fund.code},${fund.holdingAmount}`;
    }).join('\n');
    
    // 创建Blob对象
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    
    // 创建下载链接
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `holding-funds-${new Date().toISOString().split('T')[0]}.txt`;
    
    // 触发下载
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // 释放URL对象
    URL.revokeObjectURL(url);
  };

  // 导入持有基金数据
  const importHoldingFunds = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      // 读取文件内容
      const content = await file.text();
      const lines = content.split('\n').filter(line => line.trim() !== '');
      
      if (lines.length === 0) {
        alert('文件内容为空');
        return;
      }
      
      const importedFunds = [];
      let successCount = 0;
      let errorCount = 0;
      
      // 解析每一行
      for (const line of lines) {
        const [code, amountStr] = line.split(',').map(item => item.trim());
        const amount = parseFloat(amountStr);
        
        if (!code || isNaN(amount) || amount <= 0) {
          errorCount++;
          continue;
        }
        
        try {
          // 获取基金数据
          const fundData = await fetchFundData(code);
          fundData.holdingAmount = amount;
          importedFunds.push(fundData);
          successCount++;
        } catch (e) {
          console.error(`导入基金 ${code} 失败`, e);
          errorCount++;
        }
      }
      
      if (importedFunds.length > 0) {
        // 创建导入基金的映射，方便快速查找
        const importedFundMap = new Map();
        importedFunds.forEach(fund => {
          importedFundMap.set(fund.code, fund);
        });
        
        // 合并到现有持有基金：已存在的替换，不存在的新增
        const updatedFunds = holdingFunds.map(fund => {
          // 如果基金已存在于导入数据中，则替换
          if (importedFundMap.has(fund.code)) {
            return importedFundMap.get(fund.code);
          }
          // 否则保持不变
          return fund;
        });
        
        // 添加新的基金
        importedFunds.forEach(fund => {
          if (!holdingFunds.some(f => f.code === fund.code)) {
            updatedFunds.push(fund);
          }
        });
        
        setHoldingFunds(updatedFunds);
        localStorage.setItem('holdingFunds', JSON.stringify(updatedFunds));
        
        alert(`导入成功 ${successCount} 条，失败 ${errorCount} 条`);
      } else {
        alert('没有成功导入的基金数据');
      }
    } catch (e) {
      console.error('导入失败', e);
      alert('导入失败，请检查文件格式');
    }
    
    // 重置文件输入
    e.target.value = '';
  };

  // 更新持有总额
  const updateHoldingAmounts = () => {
    try {
      const updatedFunds = holdingFunds.map(f => {
        // 计算新的持有总额 = 原有持有总额 + 估算收益
        const yieldRate = f.estPricedCoverage > 0.05 ? f.estGszzl : (Number(f.gszzl) || 0);
        const estimatedProfit = (f.holdingAmount || 0) * (yieldRate / 100);
        const newHoldingAmount = (f.holdingAmount || 0) + estimatedProfit;
        return {
          ...f,
          holdingAmount: newHoldingAmount
        };
      });
      setHoldingFunds(updatedFunds);
      localStorage.setItem('holdingFunds', JSON.stringify(updatedFunds));
      const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
      setLastUpdateDate(today);
      localStorage.setItem('lastUpdateDate', today);
      setUpdateModalOpen(false);
    } catch (e) {
      console.error('更新持有总额失败', e);
      setUpdateModalOpen(false);
    }
  };

  // 按 code 去重，保留第一次出现的项，避免列表重复
  const dedupeByCode = (list) => {
    const seen = new Set();
    return list.filter((f) => {
      const c = f?.code;
      if (!c || seen.has(c)) return false;
      seen.add(c);
      return true;
    });
  };

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('funds') || '[]');
      if (Array.isArray(saved) && saved.length) {
        const deduped = dedupeByCode(saved);
        setFunds(deduped);
        localStorage.setItem('funds', JSON.stringify(deduped));
        const codes = Array.from(new Set(deduped.map((f) => f.code)));
        if (codes.length) refreshAll(codes);
      }
      const savedMs = parseInt(localStorage.getItem('refreshMs') || '30000', 10);
      if (Number.isFinite(savedMs) && savedMs >= 5000) {
        setRefreshMs(savedMs);
        setTempSeconds(Math.round(savedMs / 1000));
      }
      // 加载收起状态
      const savedCollapsed = JSON.parse(localStorage.getItem('collapsedCodes') || '[]');
      if (Array.isArray(savedCollapsed)) {
        setCollapsedCodes(new Set(savedCollapsed));
      }
      // 加载自选状态
      const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      if (Array.isArray(savedFavorites)) {
        setFavorites(new Set(savedFavorites));
      }
      // 加载视图模式
      const savedViewMode = localStorage.getItem('viewMode');
      if (savedViewMode === 'card' || savedViewMode === 'list') {
        setViewMode(savedViewMode);
      }
      
      // 加载持有基金数据
      const savedHolding = JSON.parse(localStorage.getItem('holdingFunds') || '[]');
      if (Array.isArray(savedHolding) && savedHolding.length) {
        const dedupedHolding = dedupeByCode(savedHolding);
        setHoldingFunds(dedupedHolding);
        localStorage.setItem('holdingFunds', JSON.stringify(dedupedHolding));
        const holdingCodes = Array.from(new Set(dedupedHolding.map((f) => f.code)));
        if (holdingCodes.length) refreshAll(holdingCodes);
      }
      // 加载持有基金收起状态
      const savedHoldingCollapsed = JSON.parse(localStorage.getItem('holdingCollapsedCodes') || '[]');
      if (Array.isArray(savedHoldingCollapsed)) {
        setHoldingCollapsedCodes(new Set(savedHoldingCollapsed));
      }
      // 加载持有基金自选状态
      const savedHoldingFavorites = JSON.parse(localStorage.getItem('holdingFavorites') || '[]');
      if (Array.isArray(savedHoldingFavorites)) {
        setHoldingFavorites(new Set(savedHoldingFavorites));
      }
      // 加载持有基金视图模式
      const savedHoldingViewMode = localStorage.getItem('holdingViewMode');
      if (savedHoldingViewMode === 'card' || savedHoldingViewMode === 'list') {
        setHoldingViewMode(savedHoldingViewMode);
      }
      // 加载上次更新的日期
      const savedLastUpdateDate = localStorage.getItem('lastUpdateDate');
      if (savedLastUpdateDate) {
        setLastUpdateDate(savedLastUpdateDate);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const codes = Array.from(new Set(funds.map((f) => f.code)));
      if (codes.length) refreshAll(codes);
    }, refreshMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [funds, refreshMs]);

  // --- 辅助：JSONP 数据抓取逻辑 ---
  const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.onload = () => {
        document.body.removeChild(script);
        resolve();
      };
      script.onerror = () => {
        document.body.removeChild(script);
        reject(new Error('数据加载失败'));
      };
      document.body.appendChild(script);
    });
  };

  const fetchFundData = async (c) => {
    return new Promise(async (resolve, reject) => {
      // 腾讯接口识别逻辑优化
      const getTencentPrefix = (code) => {
        if (code.startsWith('6') || code.startsWith('9')) return 'sh';
        if (code.startsWith('0') || code.startsWith('3')) return 'sz';
        if (code.startsWith('4') || code.startsWith('8')) return 'bj';
        return 'sz';
      };

      const gzUrl = `https://fundgz.1234567.com.cn/js/${c}.js?rt=${Date.now()}`;

      // 使用更安全的方式处理全局回调，避免并发覆盖
      const currentCallback = `jsonpgz_${c}_${Math.random().toString(36).slice(2, 7)}`;

      // 动态拦截并处理 jsonpgz 回调
      const scriptGz = document.createElement('script');
      // 东方财富接口固定调用 jsonpgz，我们通过修改全局变量临时捕获它
      scriptGz.src = gzUrl;

      const originalJsonpgz = window.jsonpgz;
      window.jsonpgz = (json) => {
        window.jsonpgz = originalJsonpgz; // 立即恢复
        if (!json || typeof json !== 'object') {
          reject(new Error('未获取到基金估值数据'));
          return;
        }
        const gszzlNum = Number(json.gszzl);
        const gzData = {
          code: json.fundcode,
          name: json.name,
          dwjz: json.dwjz,
          gsz: json.gsz,
          gztime: json.gztime,
          gszzl: Number.isFinite(gszzlNum) ? gszzlNum : json.gszzl
        };

        // 获取重仓股票列表
        const holdingsUrl = `https://fundf10.eastmoney.com/FundArchivesDatas.aspx?type=jjcc&code=${c}&topline=10&year=&month=&rt=${Date.now()}`;
        loadScript(holdingsUrl).then(async () => {
          let holdings = [];
          const html = window.apidata?.content || '';
          const rows = html.match(/<tr[\s\S]*?<\/tr>/gi) || [];
          for (const r of rows) {
            const cells = (r.match(/<td[\s\S]*?>([\s\S]*?)<\/td>/gi) || []).map(td => td.replace(/<[^>]*>/g, '').trim());
            const codeIdx = cells.findIndex(txt => /^\d{6}$/.test(txt));
            const weightIdx = cells.findIndex(txt => /\d+(?:\.\d+)?\s*%/.test(txt));
            if (codeIdx >= 0 && weightIdx >= 0) {
              holdings.push({
                code: cells[codeIdx],
                name: cells[codeIdx + 1] || '',
                weight: cells[weightIdx],
                change: null
              });
            }
          }

          holdings = holdings.slice(0, 10);

          if (holdings.length) {
            try {
              const tencentCodes = holdings.map(h => `s_${getTencentPrefix(h.code)}${h.code}`).join(',');
              const quoteUrl = `https://qt.gtimg.cn/q=${tencentCodes}`;

              await new Promise((resQuote) => {
                const scriptQuote = document.createElement('script');
                scriptQuote.src = quoteUrl;
                scriptQuote.onload = () => {
                  holdings.forEach(h => {
                    const varName = `v_s_${getTencentPrefix(h.code)}${h.code}`;
                    const dataStr = window[varName];
                    if (dataStr) {
                      const parts = dataStr.split('~');
                      // parts[5] 是涨跌幅
                      if (parts.length > 5) {
                        h.change = parseFloat(parts[5]);
                      }
                    }
                  });
                  if (document.body.contains(scriptQuote)) document.body.removeChild(scriptQuote);
                  resQuote();
                };
                scriptQuote.onerror = () => {
                  if (document.body.contains(scriptQuote)) document.body.removeChild(scriptQuote);
                  resQuote();
                };
                document.body.appendChild(scriptQuote);
              });
            } catch (e) {
              console.error('获取股票涨跌幅失败', e);
            }
          }

          resolve({ ...gzData, holdings });
        }).catch(() => resolve({ ...gzData, holdings: [] }));
      };

      scriptGz.onerror = () => {
        window.jsonpgz = originalJsonpgz;
        if (document.body.contains(scriptGz)) document.body.removeChild(scriptGz);
        reject(new Error('基金数据加载失败'));
      };

      document.body.appendChild(scriptGz);
      // 加载完立即移除脚本
      setTimeout(() => {
        if (document.body.contains(scriptGz)) document.body.removeChild(scriptGz);
      }, 5000);
    });
  };

  const refreshAll = async (codes) => {
    if (refreshingRef.current) return;
    refreshingRef.current = true;
    setRefreshing(true);
    const uniqueCodes = Array.from(new Set(codes));
    try {
      const updated = [];
      for (const c of uniqueCodes) {
        try {
          const data = await fetchFundData(c);
          // 保留持有基金的持有总额信息
          const holdingFund = holdingFunds.find((f) => f.code === c);
          if (holdingFund && holdingFund.holdingAmount) {
            data.holdingAmount = holdingFund.holdingAmount;
          }
          // 保留普通基金的信息
          const regularFund = funds.find((f) => f.code === c);
          if (regularFund) {
            updated.push(data);
          }
          // 同时更新持有基金列表中的数据
          if (holdingFund) {
            setHoldingFunds(prev => {
              const newHoldingFunds = prev.map(f => {
                if (f.code === c) {
                  return { ...data, holdingAmount: f.holdingAmount };
                }
                return f;
              });
              localStorage.setItem('holdingFunds', JSON.stringify(newHoldingFunds));
              return newHoldingFunds;
            });
          }
        } catch (e) {
          console.error(`刷新基金 ${c} 失败`, e);
          const old = funds.find((f) => f.code === c);
          if (old) updated.push(old);
        }
      }
      const deduped = dedupeByCode(updated);
      if (deduped.length) {
        setFunds(deduped);
        localStorage.setItem('funds', JSON.stringify(deduped));
      }
    } catch (e) {
      console.error(e);
    } finally {
      refreshingRef.current = false;
      setRefreshing(false);
    }
  };

  const toggleViewMode = () => {
    const nextMode = viewMode === 'card' ? 'list' : 'card';
    setViewMode(nextMode);
    localStorage.setItem('viewMode', nextMode);
  };

  const addFund = async (e) => {
    e.preventDefault();
    setError('');
    const clean = code.trim();
    if (!clean) {
      setError('请输入基金编号');
      return;
    }
    if (funds.some((f) => f.code === clean)) {
      setError('该基金已添加');
      return;
    }
    setLoading(true);
    try {
      const data = await fetchFundData(clean);
      const next = [data, ...funds];
      setFunds(next);
      localStorage.setItem('funds', JSON.stringify(next));
      setCode('');
    } catch (e) {
      setError(e.message || '添加失败');
    } finally {
      setLoading(false);
    }
  };

  const removeFund = (removeCode) => {
    const next = funds.filter((f) => f.code !== removeCode);
    setFunds(next);
    localStorage.setItem('funds', JSON.stringify(next));

    // 同步删除展开收起状态
    setCollapsedCodes(prev => {
      if (!prev.has(removeCode)) return prev;
      const nextSet = new Set(prev);
      nextSet.delete(removeCode);
      localStorage.setItem('collapsedCodes', JSON.stringify(Array.from(nextSet)));
      return nextSet;
    });

    // 同步删除自选状态
    setFavorites(prev => {
      if (!prev.has(removeCode)) return prev;
      const nextSet = new Set(prev);
      nextSet.delete(removeCode);
      localStorage.setItem('favorites', JSON.stringify(Array.from(nextSet)));
      if (nextSet.size === 0) setCurrentTab('all');
      return nextSet;
    });
  };

  const manualRefresh = async () => {
    if (refreshingRef.current) return;
    const codes = Array.from(new Set(funds.map((f) => f.code)));
    if (!codes.length) return;
    await refreshAll(codes);
  };

  // 导出自选基金数据
  const exportFunds = () => {
    if (funds.length === 0) {
      alert('暂无自选基金数据');
      return;
    }
    
    // 格式化为基金编号文本
    const content = funds.map(fund => fund.code).join('\n');
    
    // 创建Blob对象
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    
    // 创建下载链接
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `favorites-funds-${new Date().toISOString().split('T')[0]}.txt`;
    
    // 触发下载
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // 释放URL对象
    URL.revokeObjectURL(url);
  };

  // 导入自选基金数据
  const importFunds = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      // 读取文件内容
      const content = await file.text();
      const lines = content.split('\n').filter(line => line.trim() !== '');
      
      if (lines.length === 0) {
        alert('文件内容为空');
        return;
      }
      
      let successCount = 0;
      let errorCount = 0;
      let existCount = 0;
      
      // 解析每一行
      for (const line of lines) {
        const code = line.trim();
        
        if (!code || code.length !== 6 || !/^\d+$/.test(code)) {
          errorCount++;
          continue;
        }
        
        // 检查基金是否已存在
        if (funds.some(f => f.code === code)) {
          existCount++;
          continue;
        }
        
        try {
          // 获取基金数据
          const fundData = await fetchFundData(code);
          funds.push(fundData);
          successCount++;
        } catch (e) {
          console.error(`导入基金 ${code} 失败`, e);
          errorCount++;
        }
      }
      
      if (successCount > 0) {
        // 去重并更新本地存储
        const deduped = dedupeByCode(funds);
        setFunds(deduped);
        localStorage.setItem('funds', JSON.stringify(deduped));
        
        // 刷新数据
        const codes = Array.from(new Set(deduped.map((f) => f.code)));
        if (codes.length) refreshAll(codes);
      }
      
      alert(`导入成功 ${successCount} 条，失败 ${errorCount} 条，已存在 ${existCount} 条`);
    } catch (e) {
      console.error('导入失败', e);
      alert('导入失败，请检查文件格式');
    }
    
    // 重置文件输入
    e.target.value = '';
  };

  const saveSettings = (e) => {
    e?.preventDefault?.();
    const ms = Math.max(5, Number(tempSeconds)) * 1000;
    setRefreshMs(ms);
    localStorage.setItem('refreshMs', String(ms));
    setSettingsOpen(false);
  };

  useEffect(() => {
    const onKey = (ev) => {
      if (ev.key === 'Escape' && settingsOpen) setSettingsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [settingsOpen]);

  return (
    <div className="container content">
      <Announcement />
      <div className="navbar glass">
        {refreshing && <div className="loading-bar"></div>}
        <div className="brand">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="var(--accent)" strokeWidth="2" />
            <path d="M5 14c2-4 7-6 14-5" stroke="var(--primary)" strokeWidth="2" />
          </svg>
          <span>实时基金估值</span>
        </div>
        <div className="actions">
          <div className="badge" title="当前刷新频率">
            <span>刷新</span>
            <strong>{Math.round(refreshMs / 1000)}秒</strong>
          </div>
          <button
            className="icon-button"
            aria-label="立即刷新"
            onClick={manualRefresh}
            disabled={refreshing || funds.length === 0}
            aria-busy={refreshing}
            title="立即刷新"
          >
            <RefreshIcon className={refreshing ? 'spin' : ''} width="18" height="18" />
          </button>
          <button
            className="icon-button"
            aria-label="打开设置"
            onClick={() => setSettingsOpen(true)}
            title="设置"
          >
            <SettingsIcon width="18" height="18" />
          </button>
        </div>
      </div>

      {/* 顶部主标签页切换 */}
      <div className="main-tabs glass" style={{ marginBottom: '20px', padding: '8px 16px', borderRadius: '12px' }}>
        <div style={{ display: 'flex', gap: '8px', maxWidth: '600px', margin: '0 auto' }}>
          <button
            className={`main-tab ${mainTab === 'favorites' ? 'active' : ''}`}
            onClick={() => setMainTab('favorites')}
            style={{
              flex: 1,
              padding: '12px 16px',
              borderRadius: '8px',
              border: 'none',
              background: mainTab === 'favorites' ? 'var(--primary)' : 'transparent',
              color: mainTab === 'favorites' ? '#05263b' : 'var(--text)',
              fontWeight: mainTab === 'favorites' ? 600 : 400,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            基金自选
          </button>
          <button
            className={`main-tab ${mainTab === 'holding' ? 'active' : ''}`}
            onClick={() => setMainTab('holding')}
            style={{
              flex: 1,
              padding: '12px 16px',
              borderRadius: '8px',
              border: 'none',
              background: mainTab === 'holding' ? 'var(--primary)' : 'transparent',
              color: mainTab === 'holding' ? '#05263b' : 'var(--text)',
              fontWeight: mainTab === 'holding' ? 600 : 400,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            持有基金
          </button>
          <button
            className={`main-tab ${mainTab === 'profit' ? 'active' : ''}`}
            onClick={() => setMainTab('profit')}
            style={{
              flex: 1,
              padding: '12px 16px',
              borderRadius: '8px',
              border: 'none',
              background: mainTab === 'profit' ? 'var(--primary)' : 'transparent',
              color: mainTab === 'profit' ? '#05263b' : 'var(--text)',
              fontWeight: mainTab === 'profit' ? 600 : 400,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            收益
          </button>
        </div>
      </div>

      <div className="grid">
        {/* 基金自选标签页 */}
        {mainTab === 'favorites' && (
          <>
            <div className="col-12 glass card add-fund-section" role="region" aria-label="添加基金">
              <div className="title" style={{ marginBottom: 12 }}>
                <PlusIcon width="20" height="20" />
                <span>添加基金</span>
                <span className="muted">输入基金编号（例如：110022）</span>
              </div>
              <form className="form" onSubmit={addFund}>
                <input
                  className="input"
                  placeholder="基金编号"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  inputMode="numeric"
                />
                <button className="button" type="submit" disabled={loading}>
                  {loading ? '添加中…' : '添加'}
                </button>
              </form>
              {error && <div className="muted" style={{ marginTop: 8, color: 'var(--danger)' }}>{error}</div>}
            </div>

            <div className="col-12">
          {funds.length > 0 && (
            <div className="filter-bar" style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              {favorites.size > 0 ? (
                <div className="tabs">
                  <button
                    className={`tab ${currentTab === 'all' ? 'active' : ''}`}
                    onClick={() => setCurrentTab('all')}
                  >
                    全部 ({funds.length})
                  </button>
                  <button
                    className={`tab ${currentTab === 'fav' ? 'active' : ''}`}
                    onClick={() => setCurrentTab('fav')}
                  >
                    自选 ({favorites.size})
                  </button>
                </div>
              ) : <div />}

              <div className="sort-group" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="view-toggle" style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '2px' }}>
                  <button
                    className={`icon-button ${viewMode === 'card' ? 'active' : ''}`}
                    onClick={() => { setViewMode('card'); localStorage.setItem('viewMode', 'card'); }}
                    style={{ border: 'none', width: '32px', height: '32px', background: viewMode === 'card' ? 'var(--primary)' : 'transparent', color: viewMode === 'card' ? '#05263b' : 'var(--muted)' }}
                    title="卡片视图"
                  >
                    <GridIcon width="16" height="16" />
                  </button>
                  <button
                      className={`icon-button ${viewMode === 'list' ? 'active' : ''}`}
                      onClick={() => { setViewMode('list'); localStorage.setItem('viewMode', 'list'); }}
                      style={{ border: 'none', width: '32px', height: '32px', background: viewMode === 'list' ? 'var(--primary)' : 'transparent', color: viewMode === 'list' ? '#05263b' : 'var(--muted)' }}
                      title="表格视图"
                    >
                      <ListIcon width="16" height="16" />
                    </button>
                </div>

                <div className="divider" style={{ width: '1px', height: '20px', background: 'var(--border)' }} />

                <div className="sort-items" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="muted" style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <SortIcon width="14" height="14" />
                    排序
                  </span>
                  <div className="chips">
                    {
                      [
                        { id: 'default', label: '默认' },
                        { id: 'yield', label: '涨跌幅' },
                        { id: 'name', label: '名称' },
                        { id: 'code', label: '代码' }
                      ].map((s) => (
                        <button
                          key={s.id}
                          className={`chip ${sortBy === s.id ? 'active' : ''}`}
                          onClick={() => setSortBy(s.id)}
                          style={{ height: '28px', fontSize: '12px', padding: '0 10px' }}
                        >
                          {s.label}
                        </button>
                      ))
                    }
                  </div>
                </div>

                <div className="divider" style={{ width: '1px', height: '20px', background: 'var(--border)' }} />

                <div className="import-export-buttons" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <input
                    type="file"
                    id="import-funds"
                    accept=".txt"
                    onChange={importFunds}
                    style={{ display: 'none' }}
                  />
                  <button
                    className="button"
                    style={{ height: '28px', fontSize: '12px', padding: '0 10px' }}
                    onClick={() => document.getElementById('import-funds').click()}
                    title="导入基金"
                  >
                    导入
                  </button>
                  <button
                    className="button"
                    style={{ height: '28px', fontSize: '12px', padding: '0 10px' }}
                    onClick={exportFunds}
                    title="导出基金"
                  >
                    导出
                  </button>
                </div>
              </div>
            </div>
          )}

          {funds.length === 0 ? (
            <div className="glass card empty">尚未添加基金</div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={viewMode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={viewMode === 'card' ? 'grid' : 'table-container glass'}
              >
                <div className={viewMode === 'card' ? 'grid col-12' : ''} style={viewMode === 'card' ? { gridColumn: 'span 12', gap: 16 } : {}}>
                  {viewMode === 'list' && (
                    <div className="table-header-row">
                      <div className="table-cell name-cell">基金</div>
                      <div className="table-cell text-right value-cell">估值净值</div>
                      <div className="table-cell text-right change-cell">涨跌幅</div>
                      <div className="table-cell text-right time-cell">时间</div>
                      <div className="table-cell text-center action-cell">操作</div>
                    </div>
                  )}
                  <AnimatePresence mode="popLayout">
                    {funds
                      .filter(f => currentTab === 'all' || favorites.has(f.code))
                      .sort((a, b) => {
                        if (sortBy === 'yield') {
                          const valA = typeof a.estGszzl === 'number' ? a.estGszzl : (Number(a.gszzl) || 0);
                          const valB = typeof b.estGszzl === 'number' ? b.estGszzl : (Number(b.gszzl) || 0);
                          return valB - valA;
                        }
                        if (sortBy === 'name') return a.name.localeCompare(b.name, 'zh-CN');
                        if (sortBy === 'code') return a.code.localeCompare(b.code);
                        return 0; // default order is the order in the array
                      })
                      .map((f) => (
                      <motion.div
                        layout="position"
                        key={f.code}
                        className={viewMode === 'card' ? 'col-6' : 'table-row-wrapper'}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                      <div className={viewMode === 'card' ? 'glass card' : 'table-row'}>
                        {viewMode === 'list' ? (
                          <>
                            <div className="table-cell name-cell">
                              <button
                                className={`icon-button fav-button ${favorites.has(f.code) ? 'active' : ''}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleFavorite(f.code);
                                }}
                                title={favorites.has(f.code) ? "取消自选" : "添加自选"}
                              >
                                <StarIcon width="18" height="18" filled={favorites.has(f.code)} />
                              </button>
                              <div className="title-text">
                                <span className="name-text">{f.name}</span>
                                <span className="muted code-text">#{f.code}</span>
                              </div>
                            </div>
                            <div className="table-cell text-right value-cell">
                              <span style={{ fontWeight: 700 }}>{f.estPricedCoverage > 0.05 ? f.estGsz.toFixed(4) : (f.gsz ?? '—')}</span>
                            </div>
                            <div className="table-cell text-right change-cell">
                              <span className={f.estPricedCoverage > 0.05 ? (f.estGszzl > 0 ? 'up' : f.estGszzl < 0 ? 'down' : '') : (Number(f.gszzl) > 0 ? 'up' : Number(f.gszzl) < 0 ? 'down' : '')} style={{ fontWeight: 700 }}>
                                {f.estPricedCoverage > 0.05 ? `${f.estGszzl > 0 ? '+' : ''}${f.estGszzl.toFixed(2)}%` : (typeof f.gszzl === 'number' ? `${f.gszzl > 0 ? '+' : ''}${f.gszzl.toFixed(2)}%` : f.gszzl ?? '—')}
                              </span>
                            </div>
                            <div className="table-cell text-right time-cell">
                              <span className="muted" style={{ fontSize: '12px' }}>{f.gztime || f.time || '-'}</span>
                            </div>
                            <div className="table-cell text-center action-cell">
                              <button
                                      className="icon-button"
                                      onClick={() => openAddToHoldingModal(f)}
                                      title="添加到持有基金"
                                      style={{ width: '28px', height: '28px', marginRight: '8px' }}
                                    >
                                      <PlusIcon width="14" height="14" />
                                    </button>
                              <button
                                      className="icon-button danger"
                                      onClick={() => openDeleteConfirmModal(f.code, false)}
                                      title="删除"
                                      style={{ width: '28px', height: '28px' }}
                                    >
                                      <TrashIcon width="14" height="14" />
                                    </button>
                            </div>
                          </>
                        ) : (
                          <>
                          <div className="row" style={{ marginBottom: 10 }}>
                            <div className="title">
                              <button
                                className={`icon-button fav-button ${favorites.has(f.code) ? 'active' : ''}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleFavorite(f.code);
                                }}
                                title={favorites.has(f.code) ? "取消自选" : "添加自选"}
                              >
                                <StarIcon width="18" height="18" filled={favorites.has(f.code)} />
                              </button>
                              <div className="title-text">
                                <span>{f.name}</span>
                                <span className="muted">#{f.code}</span>
                              </div>
                            </div>

                            <div className="actions">
                                <div className="badge-v">
                                  <span>估值时间</span>
                                  <strong>{f.gztime || f.time || '-'}</strong>
                                </div>
                                <button
                                  className="icon-button"
                                  style={{ color: 'var(--primary)', marginRight: '8px' }}
                                  onClick={() => openAddToHoldingModal(f)}
                                  title="添加到持有基金"
                                >
                                  <PlusIcon width="18" height="18" />
                                </button>
                                <button
                                      className="icon-button danger"
                                      onClick={() => openDeleteConfirmModal(f.code, false)}
                                      title="删除"
                                    >
                                      <TrashIcon width="18" height="18" />
                                    </button>
                              </div>
                          </div>

                          <div className="row" style={{ marginBottom: 12 }}>
                            <Stat label="单位净值" value={f.dwjz ?? '—'} />
                            <Stat label="估值净值" value={f.estPricedCoverage > 0.05 ? f.estGsz.toFixed(4) : (f.gsz ?? '—')} />
                            <Stat
                              label="涨跌幅"
                              value={f.estPricedCoverage > 0.05 ? `${f.estGszzl > 0 ? '+' : ''}${f.estGszzl.toFixed(2)}%` : (typeof f.gszzl === 'number' ? `${f.gszzl > 0 ? '+' : ''}${f.gszzl.toFixed(2)}%` : f.gszzl ?? '—')}
                              delta={f.estPricedCoverage > 0.05 ? f.estGszzl : (Number(f.gszzl) || 0)}
                            />
                          </div>
                          {f.estPricedCoverage > 0.05 && (
                            <div style={{ fontSize: '10px', color: 'var(--muted)', marginTop: -8, marginBottom: 10, textAlign: 'right' }}>
                              基于 {Math.round(f.estPricedCoverage * 100)}% 持仓估算
                            </div>
                          )}
                          <div
                            style={{ marginBottom: 8, cursor: 'pointer', userSelect: 'none' }}
                            className="title"
                            onClick={() => toggleCollapse(f.code)}
                          >
                            <div className="row" style={{ width: '100%', flex: 1 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                <span>前10重仓股票</span>
                                <ChevronIcon
                                  width="16"
                                  height="16"
                                  className="muted"
                                  style={{
                                    transform: collapsedCodes.has(f.code) ? 'rotate(-90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease'
                                  }}
                                />
                              </div>
                              <span className="muted">涨跌幅 / 占比</span>
                            </div>
                          </div>
                          <AnimatePresence>
                            {!collapsedCodes.has(f.code) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                style={{ overflow: 'hidden' }}
                              >
                                {Array.isArray(f.holdings) && f.holdings.length ? (
                                  <div className="list">
                                    {f.holdings.map((h, idx) => (
                                      <div className="item" key={idx}>
                                        <span className="name">{h.name}</span>
                                        <div className="values">
                                          {typeof h.change === 'number' && (
                                            <span className={`badge ${h.change > 0 ? 'up' : h.change < 0 ? 'down' : ''}`} style={{ marginRight: 8 }}>
                                              {h.change > 0 ? '+' : ''}{h.change.toFixed(2)}%
                                            </span>
                                          )}
                                          <span className="weight">{h.weight}</span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="muted" style={{ padding: '8px 0' }}>暂无重仓数据</div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
          </>
        )}

        {/* 持有基金标签页 */}
        {mainTab === 'holding' && (
          <>
            <div className="col-12 glass card add-fund-section" role="region" aria-label="添加持有基金">
              <div className="title" style={{ marginBottom: 12 }}>
                <PlusIcon width="20" height="20" />
                <span>添加持有基金</span>
                <span className="muted">输入基金编号和持有总额</span>
              </div>
              <form className="form" onSubmit={addHoldingFund} style={{ gap: '12px' }}>
                <input
                  className="input"
                  placeholder="基金编号（例如：110022）"
                  value={holdingCode}
                  onChange={(e) => setHoldingCode(e.target.value)}
                  inputMode="numeric"
                />
                <input
                  className="input"
                  placeholder="持有总额（元）"
                  value={holdingAmount}
                  onChange={(e) => setHoldingAmount(e.target.value)}
                  inputMode="decimal"
                />
                <button className="button" type="submit" disabled={holdingLoading}>
                  {holdingLoading ? '添加中…' : '添加'}
                </button>
              </form>
              {holdingError && <div className="muted" style={{ marginTop: 8, color: 'var(--danger)' }}>{holdingError}</div>}
            </div>

            <div className="col-12">
              {holdingFunds.length > 0 && (
                <div className="filter-bar" style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: '14px' }}>
                      <div>
                        <span className="muted" style={{ marginRight: 8 }}>总持有额</span>
                        <strong style={{ color: 'var(--text)' }}>
                          ¥{holdingFunds.reduce((sum, f) => sum + (f.holdingAmount || 0), 0).toFixed(2)}
                        </strong>
                      </div>
                      <div>
                        <span className="muted" style={{ marginRight: 8 }}>估算总收益</span>
                        <strong style={{
                          color: holdingFunds.reduce((sum, f) => {
                            const yieldRate = f.estPricedCoverage > 0.05 ? f.estGszzl : (Number(f.gszzl) || 0);
                            return sum + ((f.holdingAmount || 0) * (yieldRate / 100));
                          }, 0) >= 0 ? 'var(--danger)' : 'var(--success)'
                        }}>
                          ¥{holdingFunds.reduce((sum, f) => {
                            const yieldRate = f.estPricedCoverage > 0.05 ? f.estGszzl : (Number(f.gszzl) || 0);
                            return sum + ((f.holdingAmount || 0) * (yieldRate / 100));
                          }, 0).toFixed(2)}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div className="sort-group" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div className="view-toggle" style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '2px' }}>
                        <button
                          className={`icon-button ${holdingViewMode === 'card' ? 'active' : ''}`}
                          onClick={() => { setHoldingViewMode('card'); localStorage.setItem('holdingViewMode', 'card'); }}
                          style={{ border: 'none', width: '32px', height: '32px', background: holdingViewMode === 'card' ? 'var(--primary)' : 'transparent', color: holdingViewMode === 'card' ? '#05263b' : 'var(--muted)' }}
                          title="卡片视图"
                        >
                          <GridIcon width="16" height="16" />
                        </button>
                        <button
                            className={`icon-button ${holdingViewMode === 'list' ? 'active' : ''}`}
                            onClick={() => { setHoldingViewMode('list'); localStorage.setItem('holdingViewMode', 'list'); }}
                            style={{ border: 'none', width: '32px', height: '32px', background: holdingViewMode === 'list' ? 'var(--primary)' : 'transparent', color: holdingViewMode === 'list' ? '#05263b' : 'var(--muted)' }}
                            title="表格视图"
                          >
                            <ListIcon width="16" height="16" />
                          </button>
                      </div>

                      <div className="divider" style={{ width: '1px', height: '20px', background: 'var(--border)' }} />

                      <div className="sort-items" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span className="muted" style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: 4 }}>
                          <SortIcon width="14" height="14" />
                          排序
                        </span>
                        <div className="chips">
                          {
                            [
                              { id: 'default', label: '默认' },
                              { id: 'yield', label: '涨跌幅' },
                              { id: 'profit', label: '收益' },
                              { id: 'name', label: '名称' },
                              { id: 'code', label: '代码' }
                            ].map((s) => (
                              <button
                                key={s.id}
                                className={`chip ${holdingSortBy === s.id ? 'active' : ''}`}
                                onClick={() => setHoldingSortBy(s.id)}
                                style={{ height: '28px', fontSize: '12px', padding: '0 10px' }}
                              >
                                {s.label}
                              </button>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                    <button
                      className="button"
                      onClick={openUpdateModal}
                      disabled={!isUpdateTimeValid() || lastUpdateDate === new Date().toISOString().split('T')[0]}
                      style={{
                        background: (isUpdateTimeValid() && lastUpdateDate !== new Date().toISOString().split('T')[0]) ? 'linear-gradient(180deg, #0ea5e9, #22d3ee)' : 'rgba(255,255,255,0.05)',
                        color: (isUpdateTimeValid() && lastUpdateDate !== new Date().toISOString().split('T')[0]) ? '#05263b' : 'var(--muted)',
                        cursor: (isUpdateTimeValid() && lastUpdateDate !== new Date().toISOString().split('T')[0]) ? 'pointer' : 'not-allowed',
                        opacity: (isUpdateTimeValid() && lastUpdateDate !== new Date().toISOString().split('T')[0]) ? 1 : 0.6
                      }}
                    >
                      持有更新
                    </button>
                    <button
                      className="button"
                      onClick={exportHoldingFunds}
                      style={{
                        background: 'linear-gradient(180deg, #10b981, #34d399)',
                        color: '#065f46',
                        marginLeft: '8px'
                      }}
                    >
                      导出
                    </button>
                    <button
                      className="button"
                      onClick={() => document.getElementById('import-input').click()}
                      style={{
                        background: 'linear-gradient(180deg, #8b5cf6, #a78bfa)',
                        color: '#4c1d95',
                        marginLeft: '8px'
                      }}
                    >
                      导入
                    </button>
                    <input
                      type="file"
                      id="import-input"
                      accept=".txt"
                      onChange={importHoldingFunds}
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>
              )}

              {holdingFunds.length === 0 ? (
                <div className="glass card empty">尚未添加持有基金</div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={holdingViewMode}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={holdingViewMode === 'card' ? 'grid' : 'table-container glass'}
                  >
                    <div className={holdingViewMode === 'card' ? 'grid col-12' : ''} style={holdingViewMode === 'card' ? { gridColumn: 'span 12', gap: 16 } : {}}>
                      {holdingViewMode === 'list' && (
                        <div className="table-header-row">
                          <div className="table-cell name-cell">基金</div>
                          <div className="table-cell text-right value-cell">持有总额</div>
                          <div className="table-cell text-right change-cell">涨跌幅</div>
                          <div className="table-cell text-right change-cell">估算收益</div>
                          <div className="table-cell text-right time-cell">时间</div>
                          <div className="table-cell text-center action-cell">操作</div>
                        </div>
                      )}
                      <AnimatePresence mode="popLayout">
                        {holdingFunds
                            .sort((a, b) => {
                              if (holdingSortBy === 'yield') {
                                const valA = typeof a.estGszzl === 'number' ? a.estGszzl : (Number(a.gszzl) || 0);
                                const valB = typeof b.estGszzl === 'number' ? b.estGszzl : (Number(b.gszzl) || 0);
                                return valB - valA;
                              }
                              if (holdingSortBy === 'profit') {
                                // 计算持有收益：持有总额 * 涨跌幅 / 100
                                const profitA = (a.holdingAmount || 0) * (typeof a.estGszzl === 'number' ? a.estGszzl : (Number(a.gszzl) || 0)) / 100;
                                const profitB = (b.holdingAmount || 0) * (typeof b.estGszzl === 'number' ? b.estGszzl : (Number(b.gszzl) || 0)) / 100;
                                return profitB - profitA; // 逆序排列，收益高的在前
                              }
                              if (holdingSortBy === 'name') return a.name.localeCompare(b.name, 'zh-CN');
                              if (holdingSortBy === 'code') return a.code.localeCompare(b.code);
                              return 0; // default order is the order in the array
                            })
                            .map((f) => (
                            <motion.div
                              layout="position"
                              key={f.code}
                              className={holdingViewMode === 'card' ? 'col-6' : 'table-row-wrapper'}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                            >
                            <div className={holdingViewMode === 'card' ? 'glass card' : 'table-row'}>
                              {holdingViewMode === 'list' ? (
                                <>
                                  <div className="table-cell name-cell">
                                    <div className="title-text">
                                      <span className="name-text">{f.name}</span>
                                      <span className="muted code-text">#{f.code}</span>
                                    </div>
                                  </div>
                                  <div className="table-cell text-right value-cell">
                                    <span style={{ fontWeight: 700 }}>{f.holdingAmount ? `¥${f.holdingAmount.toFixed(2)}` : '—'}</span>
                                  </div>
                                  <div className="table-cell text-right change-cell">
                                    <span className={f.estPricedCoverage > 0.05 ? (f.estGszzl > 0 ? 'up' : f.estGszzl < 0 ? 'down' : '') : (Number(f.gszzl) > 0 ? 'up' : Number(f.gszzl) < 0 ? 'down' : '')} style={{ fontWeight: 700 }}>
                                      {f.estPricedCoverage > 0.05 ? `${f.estGszzl > 0 ? '+' : ''}${f.estGszzl.toFixed(2)}%` : (typeof f.gszzl === 'number' ? `${f.gszzl > 0 ? '+' : ''}${f.gszzl.toFixed(2)}%` : f.gszzl ?? '—')}
                                    </span>
                                  </div>
                                  <div className="table-cell text-right change-cell">
                                    {f.holdingAmount ? (
                                      <span className={f.estPricedCoverage > 0.05 ? (f.estGszzl > 0 ? 'up' : f.estGszzl < 0 ? 'down' : '') : (Number(f.gszzl) > 0 ? 'up' : Number(f.gszzl) < 0 ? 'down' : '')} style={{ fontWeight: 700 }}>
                                        ¥{((f.estPricedCoverage > 0.05 ? f.estGszzl : (Number(f.gszzl) || 0)) / 100 * f.holdingAmount).toFixed(2)}
                                      </span>
                                    ) : (
                                      <span className="muted">—</span>
                                    )}
                                  </div>
                                  <div className="table-cell text-right time-cell">
                                    <span className="muted" style={{ fontSize: '12px' }}>{f.gztime || f.time || '-'}</span>
                                  </div>
                                  <div className="table-cell text-center action-cell">
                                    <button
                                      className="icon-button"
                                      onClick={() => openEditHoldingModal(f)}
                                      title="修改持有总额"
                                      style={{ width: '28px', height: '28px', marginRight: '8px' }}
                                    >
                                      <EditIcon width="14" height="14" />
                                    </button>
                                    <button
                                      className="icon-button danger"
                                      onClick={() => openDeleteConfirmModal(f.code, true)}
                                      title="删除"
                                      style={{ width: '28px', height: '28px' }}
                                    >
                                      <TrashIcon width="14" height="14" />
                                    </button>
                                  </div>
                                </>
                              ) : (
                                <>
                                <div className="row" style={{ marginBottom: 10 }}>
                                  <div className="title">
                                    <div className="title-text">
                                      <span>{f.name}</span>
                                      <span className="muted">#{f.code}</span>
                                    </div>
                                  </div>

                                  <div className="actions">
                                    <div className="badge-v">
                                      <span>估值时间</span>
                                      <strong>{f.gztime || f.time || '-'}</strong>
                                    </div>
                                    <button
                                      className="icon-button"
                                      onClick={() => openEditHoldingModal(f)}
                                      title="修改持有总额"
                                      style={{ marginRight: '8px' }}
                                    >
                                      <EditIcon width="18" height="18" />
                                    </button>
                                    <button
                                      className="icon-button danger"
                                      onClick={() => openDeleteConfirmModal(f.code, true)}
                                      title="删除"
                                    >
                                      <TrashIcon width="18" height="18" />
                                    </button>
                                  </div>
                                </div>

                                {f.holdingAmount && (
                                  <div className="row" style={{ marginBottom: 12 }}>
                                    <Stat label="持有总额" value={`¥${f.holdingAmount.toFixed(2)}`} />
                                    <Stat 
                                      label="持有份额" 
                                      value={f.dwjz ? `${(f.holdingAmount / parseFloat(f.dwjz)).toFixed(2)}` : '—'} 
                                    />
                                    <Stat
                                      label="估算收益"
                                      value={(() => {
                                        const yieldRate = f.estPricedCoverage > 0.05 ? f.estGszzl : (Number(f.gszzl) || 0);
                                        const profit = f.holdingAmount * (yieldRate / 100);
                                        return `¥${profit.toFixed(2)}`;
                                      })()}
                                      delta={f.estPricedCoverage > 0.05 ? f.estGszzl : (Number(f.gszzl) || 0)}
                                    />
                                  </div>
                                )}

                                <div className="row" style={{ marginBottom: 12 }}>
                                  <Stat label="单位净值" value={f.dwjz ?? '—'} />
                                  <Stat label="估值净值" value={f.estPricedCoverage > 0.05 ? f.estGsz.toFixed(4) : (f.gsz ?? '—')} />
                                  <Stat
                                    label="涨跌幅"
                                    value={f.estPricedCoverage > 0.05 ? `${f.estGszzl > 0 ? '+' : ''}${f.estGszzl.toFixed(2)}%` : (typeof f.gszzl === 'number' ? `${f.gszzl > 0 ? '+' : ''}${f.gszzl.toFixed(2)}%` : f.gszzl ?? '—')}
                                    delta={f.estPricedCoverage > 0.05 ? f.estGszzl : (Number(f.gszzl) || 0)}
                                  />
                                </div>
                                {f.estPricedCoverage > 0.05 && (
                                  <div style={{ fontSize: '10px', color: 'var(--muted)', marginTop: -8, marginBottom: 10, textAlign: 'right' }}>
                                    基于 {Math.round(f.estPricedCoverage * 100)}% 持仓估算
                                  </div>
                                )}
                                <div
                                  style={{ marginBottom: 8, cursor: 'pointer', userSelect: 'none' }}
                                  className="title"
                                  onClick={() => toggleHoldingCollapse(f.code)}
                                >
                                  <div className="row" style={{ width: '100%', flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                      <span>前10重仓股票</span>
                                      <ChevronIcon
                                        width="16"
                                        height="16"
                                        className="muted"
                                        style={{
                                          transform: holdingCollapsedCodes.has(f.code) ? 'rotate(-90deg)' : 'rotate(0deg)',
                                          transition: 'transform 0.2s ease'
                                        }}
                                      />
                                    </div>
                                    <span className="muted">涨跌幅 / 占比</span>
                                  </div>
                                </div>
                                <AnimatePresence>
                                  {!holdingCollapsedCodes.has(f.code) && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                                      style={{ overflow: 'hidden' }}
                                    >
                                      {Array.isArray(f.holdings) && f.holdings.length ? (
                                        <div className="list">
                                          {f.holdings.map((h, idx) => (
                                            <div className="item" key={idx}>
                                              <span className="name">{h.name}</span>
                                              <div className="values">
                                                {typeof h.change === 'number' && (
                                                  <span className={`badge ${h.change > 0 ? 'up' : h.change < 0 ? 'down' : ''}`} style={{ marginRight: 8 }}>
                                                    {h.change > 0 ? '+' : ''}{h.change.toFixed(2)}%
                                                  </span>
                                                )}
                                                <span className="weight">{h.weight}</span>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      ) : (
                                        <div className="muted" style={{ padding: '8px 0' }}>暂无重仓数据</div>
                                      )}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </>
                              )}
                            </div>
                            </motion.div>
                          ))}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </>
        )}

        {/* 收益标签页 */}
        {mainTab === 'profit' && (
          <div className="col-12">
            <div className="glass card" style={{ padding: '40px 20px', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '16px', color: 'var(--text)' }}>收益分析</h3>
              <p className="muted">功能开发中，敬请期待</p>
              <div style={{ marginTop: '24px' }}>
                <button
                  className="button"
                  onClick={() => setMainTab('favorites')}
                >
                  返回基金自选
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="footer">
        <p>数据源：实时估值与重仓直连东方财富，无需后端，部署即用</p>
        <p>注：估算数据与真实结算数据会有1%左右误差</p>
      </div>

      {settingsOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="设置" onClick={() => setSettingsOpen(false)}>
          <div className="glass card modal" onClick={(e) => e.stopPropagation()}>
            <div className="title" style={{ marginBottom: 12 }}>
              <SettingsIcon width="20" height="20" />
              <span>设置</span>
              <span className="muted">配置刷新频率</span>
            </div>

            <div className="form-group" style={{ marginBottom: 16 }}>
              <div className="muted" style={{ marginBottom: 8, fontSize: '0.8rem' }}>刷新频率</div>
              <div className="chips" style={{ marginBottom: 12 }}>
                {[10, 30, 60, 120, 300].map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`chip ${tempSeconds === s ? 'active' : ''}`}
                    onClick={() => setTempSeconds(s)}
                    aria-pressed={tempSeconds === s}
                  >
                    {s} 秒
                  </button>
                ))}
              </div>
              <input
                className="input"
                type="number"
                min="5"
                step="5"
                value={tempSeconds}
                onChange={(e) => setTempSeconds(Number(e.target.value))}
                placeholder="自定义秒数"
              />
            </div>

            <div className="row" style={{ justifyContent: 'flex-end', marginTop: 24 }}>
              <button className="button" onClick={saveSettings}>保存并关闭</button>
            </div>
          </div>
        </div>
      )}

      {/* 添加到持有基金弹窗 */}
      {addHoldingModalOpen && selectedFund && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="添加到持有基金" onClick={closeAddToHoldingModal}>
          <div className="glass card modal" onClick={(e) => e.stopPropagation()}>
            <div className="title" style={{ marginBottom: 12 }}>
              <PlusIcon width="20" height="20" />
              <span>添加到持有基金</span>
              <span className="muted">{selectedFund.name} (#{selectedFund.code})</span>
            </div>

            <form className="form" onSubmit={addToHolding} style={{ gap: '12px' }}>
              <div className="form-group" style={{ marginBottom: 16 }}>
                <div className="muted" style={{ marginBottom: 8, fontSize: '0.8rem' }}>持有金额</div>
                <input
                  className="input"
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={modalAmount}
                  onChange={(e) => setModalAmount(e.target.value)}
                  placeholder="请输入持有金额（元）"
                  inputMode="decimal"
                />
                {modalError && <div className="muted" style={{ marginTop: 8, color: 'var(--danger)' }}>{modalError}</div>}
              </div>

              <div className="row" style={{ justifyContent: 'flex-end', marginTop: 24, gap: '12px' }}>
                <button className="button" type="button" onClick={closeAddToHoldingModal} style={{ background: 'transparent', border: '1px solid var(--border)' }}>
                  取消
                </button>
                <button className="button" type="submit">
                  添加到持有基金
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 持有更新确认弹窗 */}
      {updateModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="确认更新持有总额" onClick={closeUpdateModal}>
          <div className="glass card modal" onClick={(e) => e.stopPropagation()}>
            <div className="title" style={{ marginBottom: 12 }}>
              <RefreshCwIcon width="20" height="20" />
              <span>确认更新持有总额</span>
              <span className="muted">根据估算收益更新</span>
            </div>

            <div style={{ marginBottom: 24 }}>
              <p>是否确认现在更新总持有额？</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>更新后，每一基金的持有总额将根据其持有总额与估算收益的和进行更新。</p>
            </div>

            <div className="row" style={{ justifyContent: 'flex-end', marginTop: 24, gap: '12px' }}>
              <button className="button" type="button" onClick={closeUpdateModal} style={{ background: 'transparent', border: '1px solid var(--border)' }}>
                不更新
              </button>
              <button className="button" type="button" onClick={updateHoldingAmounts}>
                确认更新
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 持有更新错误弹窗 */}
      {updateErrorModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="更新时间错误" onClick={closeUpdateErrorModal}>
          <div className="glass card modal" onClick={(e) => e.stopPropagation()}>
            <div className="title" style={{ marginBottom: 12 }}>
              <AlertCircleIcon width="20" height="20" />
              <span>更新时间错误</span>
              <span className="muted">不在可更新时间范围</span>
            </div>

            <div style={{ marginBottom: 24 }}>
              <p>目前不在可更新时间范围！</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>持有更新功能仅在每天的下午三点至晚上十一点之间可用。</p>
            </div>

            <div className="row" style={{ justifyContent: 'flex-end', marginTop: 24 }}>
              <button className="button" type="button" onClick={closeUpdateErrorModal}>
                确定
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 修改持有总额弹窗 */}
      {editHoldingModalOpen && editingFund && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="修改持有总额" onClick={closeEditHoldingModal}>
          <div className="glass card modal" onClick={(e) => e.stopPropagation()}>
            <div className="title" style={{ marginBottom: 12 }}>
              <EditIcon width="20" height="20" />
              <span>修改持有总额</span>
              <span className="muted">{editingFund.name} (#{editingFund.code})</span>
            </div>

            <form className="form" onSubmit={editHoldingAmount} style={{ gap: '12px' }}>
              <div className="form-group" style={{ marginBottom: 16 }}>
                <div className="muted" style={{ marginBottom: 8, fontSize: '0.8rem' }}>持有总额</div>
                <input
                  className="input"
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={editModalAmount}
                  onChange={(e) => setEditModalAmount(e.target.value)}
                  placeholder="请输入持有总额（元）"
                  inputMode="decimal"
                />
                {editModalError && <div className="muted" style={{ marginTop: 8, color: 'var(--danger)' }}>{editModalError}</div>}
              </div>

              <div className="row" style={{ justifyContent: 'flex-end', marginTop: 24, gap: '12px' }}>
                <button className="button" type="button" onClick={closeEditHoldingModal} style={{ background: 'transparent', border: '1px solid var(--border)' }}>
                  取消
                </button>
                <button className="button" type="submit">
                  修改持有总额
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 删除确认弹窗 */}
      {deleteConfirmModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="确认删除" onClick={closeDeleteConfirmModal}>
          <div className="glass card modal" onClick={(e) => e.stopPropagation()}>
            <div className="title" style={{ marginBottom: 12 }}>
              <TrashIcon width="20" height="20" />
              <span>确认删除</span>
              <span className="muted">请确认是否删除</span>
            </div>

            <div style={{ marginBottom: 24 }}>
              <p>确定要删除该基金吗？</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>此操作无法撤销，请谨慎操作。</p>
            </div>

            <div className="row" style={{ justifyContent: 'flex-end', marginTop: 24, gap: '12px' }}>
              <button className="button" type="button" onClick={closeDeleteConfirmModal} style={{ background: 'transparent', border: '1px solid var(--border)' }}>
                取消
              </button>
              <button className="button" type="button" onClick={confirmDelete} style={{ background: 'linear-gradient(180deg, #ef4444, #dc2626)', color: 'white' }}>
                确认删除
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
