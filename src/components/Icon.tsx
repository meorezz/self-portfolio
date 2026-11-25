import spriteUrl from '../assets/icons.svg?url'

export const icons = {
  achievement: 'svgrepo-545590',
  cost: 'svgrepo-545598',
  alumni: 'svgrepo-545599',
  resource: 'svgrepo-545600',
  management: 'svgrepo-545602',
  location: 'svgrepo-545603',
  time: 'svgrepo-545604',
  system: 'svgrepo-545606',
  collab: 'svgrepo-545607',
  classFormat: 'svgrepo-545608',
  execution: 'svgrepo-545609',
  check: 'svgrepo-545610',
  product: 'svgrepo-545611',
  process: 'svgrepo-545612',
  operations: 'svgrepo-545613',
  visuals: 'svgrepo-545614',
  content: 'svgrepo-545615',
  tag: 'svgrepo-545616',
  graph: 'svgrepo-545617',
  fire: 'svgrepo-545620',
  pin: 'svgrepo-545621',
  connect: 'svgrepo-545622',
  pie: 'svgrepo-545623',
  profile: 'svgrepo-545624',
  document: 'svgrepo-545625',
  people: 'svgrepo-545626',
  ai: 'svgrepo-545627',
  cubes: 'svgrepo-545628',
  cube: 'svgrepo-545629',
  group: 'svgrepo-545630',
  target: 'svgrepo-545631',
  shield: 'svgrepo-545632',
  checkCircle: 'svgrepo-545633',
} as const

export type IconName = keyof typeof icons

export function Icon({
  name,
  className = 'icon',
  label,
}: {
  name: IconName
  className?: string
  label?: string
}) {
  return (
    <svg
      className={className}
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
    >
      <use href={`${spriteUrl}#${icons[name]}`} />
    </svg>
  )
}
