export function Hashtag({path}: {path: string}) {
  <a href={path}>
    <div className="inline-flex cursor-pointer items-center space-x-1 rounded-md bg-surface-4 px-3 py-1 text-base text-high transition duration-100 ease-in hover:bg-surface-6">
      <p>
        <span className="text-primary-200">#</span>community
      </p>
    </div>
  </a>;
}
