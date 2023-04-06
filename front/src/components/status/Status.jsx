
export const STATUS_VARIANTS = {
  in_progress: "in_progress",
  awaiting_decision: "awaiting_decision",
  done: "done"
}
//bg-primary-200 text-primary-700
//bg-accent-100 text-accent-700
//bg-done-100 text-done-700

const STATUS_TEXT = {
  in_progress: "в исполнении",
  awaiting_decision: "ожидает решения",
  done: "исполнено"
}

const STATUS_STYLES = {
  in_progress: "bg-primary-200 text-primary-700 border border-primary-700",
  awaiting_decision: "bg-accent-100 text-accent-700 border border-accent-700",
  done: "bg-done-100 text-done-700 border border-done-700"
}

export const Status = ({variant= STATUS_VARIANTS.in_progress}) => {
  return (
    <div
      className={`inline px-3 py-1 text-sm font-normal rounded-full ${STATUS_STYLES[variant]}`}>
      {STATUS_TEXT[variant]}
    </div>
  )
}