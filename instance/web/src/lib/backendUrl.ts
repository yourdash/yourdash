const INSTANCE_BACKEND_URL = import.meta.env.VITE_INSTANCE_BACKEND_URL !== null && import.meta.env.VITE_INSTANCE_BACKEND_URL || "http://localhost:3563"

export { INSTANCE_BACKEND_URL }