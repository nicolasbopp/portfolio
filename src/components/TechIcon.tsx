import {
  siDocker,
  siExpress,
  siFlask,
  siGit,
  siGithub,
  siGitlab,
  siJavascript,
  siKubernetes,
  siLinux,
  siMongodb,
  siMysql,
  siNginx,
  siNodedotjs,
  siOpenjdk,
  siPandas,
  siPostgresql,
  siPostman,
  siPython,
  siPytorch,
  siReact,
  siRedux,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

// Official brand marks from Simple Icons. Technologies without their own mark
// (SQL, React Three Fiber, Azure) are shown as text only.
const ICONS: Record<string, SimpleIcon> = {
  Python: siPython,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Java: siOpenjdk,
  React: siReact,
  "React Native": siReact,
  Redux: siRedux,
  "Tailwind CSS": siTailwindcss,
  "Node.js": siNodedotjs,
  Express: siExpress,
  Flask: siFlask,
  PyTorch: siPytorch,
  TensorFlow: siTensorflow,
  pandas: siPandas,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  MongoDB: siMongodb,
  Docker: siDocker,
  Kubernetes: siKubernetes,
  Nginx: siNginx,
  Linux: siLinux,
  Git: siGit,
  GitHub: siGithub,
  GitLab: siGitlab,
  Postman: siPostman,
};

export default function TechIcon({ name }: { name: string }) {
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <svg className="tech-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={icon.path} />
    </svg>
  );
}
