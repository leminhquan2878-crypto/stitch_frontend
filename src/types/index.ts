// ─────────────────────────────────────────────
// Domain types for the NCKH Research Project
// Management System
// ─────────────────────────────────────────────

export type ProjectStatus =
  | 'CHO_KY_HOP_DONG'
  | 'DA_KY_KET'
  | 'DANG_THUC_HIEN'
  | 'DA_BAO_CAO_GIUA_KY'
  | 'TRE_HAN'
  | 'DA_NOP_KET_QUA'
  | 'DA_XAC_NHAN_SAN_PHAM'
  | 'DANG_NGHIEM_THU'
  | 'YEU_CAU_CHINH_SUA'
  | 'CHINH_SUA_HOAN_THANH'
  | 'DA_NGHIEM_THU'
  | 'KHONG_DAT'
  | 'CHO_QUYET_TOAN'
  | 'DANG_QUYET_TOAN'
  | 'THIEU_HO_SO'
  | 'DA_THANH_LY'
  | 'DA_HUY'

export type UserRole =
  | 'SUPERADMIN'
  | 'ADMIN_NCKH'
  | 'CHU_NHIEM'
  | 'CHU_TICH_HD'
  | 'PHAN_BIEN_1'
  | 'PHAN_BIEN_2'
  | 'THU_KY_HD'
  | 'UY_VIEN'
  | 'KE_TOAN'

export interface User {
  id: string
  fullName: string
  email: string
  role: UserRole
  employeeCode?: string
  faculty?: string
  academicTitle?: string
}

export interface Contract {
  id: string
  contractNumber: string
  signedDate?: string
  startDate: string
  endDate: string
  projectId: string
  projectName: string
  principalInvestigator: string
  status: ProjectStatus
  totalValue: number
  advanceAmount: number
  hasMidtermReport: boolean
  scannedFileUrl?: string
  createdAt: string
  updatedAt: string
}

export interface CouncilMember {
  id: string
  fullName: string
  academicTitle: string
  organization: string
  email: string
  role: 'CHU_TICH' | 'PHAN_BIEN_1' | 'PHAN_BIEN_2' | 'THU_KY' | 'UY_VIEN'
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED'
  score?: number
  hasCOI?: boolean
}

export interface Council {
  id: string
  decisionNumber: string
  projectId: string
  projectName: string
  createdDate: string
  status: 'DANG_HOAT_DONG' | 'DA_GIAI_TAN'
  members: CouncilMember[]
  decisionFileUrl?: string
}

export interface Extension {
  id: string
  projectId: string
  projectCode: string
  reason: string
  explanationFileUrl?: string
  proposedDeadline: string
  extensionCount: 1 | 2
  bomStatus: 'PENDING_BOM' | 'APPROVED' | 'REJECTED'
  adminStatus: 'PENDING' | 'APPROVED' | 'REJECTED'
  createdAt: string
}

export interface FormTemplate {
  id: string
  name: string
  role: 'CHU_TICH' | 'PHAN_BIEN' | 'THU_KY' | 'UY_VIEN'
  version: string
  effectiveDate: string
  fileSizeKb: number
  fileUrl: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Settlement {
  id: string
  code: string
  projectId: string
  projectName: string
  status: 'CHO_THAM_DINH' | 'THIEU_HO_SO' | 'HOP_LE' | 'HOAN_TAT'
  missingDocs?: string[]
  totalBudget: number
  disbursedAmount: number
  submittedAt: string
  updatedAt: string
}

export interface Notification {
  id: string
  type: 'WARNING' | 'INFO' | 'SYSTEM' | 'ALERT'
  message: string
  createdAt: string
  isRead: boolean
  link?: string
}
