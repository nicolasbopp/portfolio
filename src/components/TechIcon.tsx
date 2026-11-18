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
  siMui,
  siMysql,
  siNginx,
  siNodedotjs,
  siPandas,
  siPostgresql,
  siPostman,
  siPython,
  siPytorch,
  siReact,
  siRedux,
  siTailwindcss,
  siTensorflow,
  siThreedotjs,
  siTypescript,
} from "simple-icons";

type Icon = { path: string; viewBox?: string };

// Java and Azure are not part of Simple Icons; these marks come from Devicon (MIT licence).
const java: Icon = {
  viewBox: "0 0 128 128",
  path: "M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zm33.189-10.46c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zm11.319-60.575c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zm9.998 81.144s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644C17.455 81.134 61.958 83.958 85 77.896zm5.609 15.145c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559C89.459 14.563 76.492 1.587 76.492 1.587c5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zm27.274 51.748c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z",
};
const azure: Icon = {
  viewBox: "0 0 128 128",
  path: "M43.983 4.653a5.911 5.911 0 015.6 4.022l35.91 106.396a5.911 5.911 0 01-5.603 7.802h41.38a5.917 5.917 0 004.8-2.465 5.909 5.909 0 00.798-5.34L90.961 8.672a5.91 5.91 0 00-5.602-4.022zm-1.336.478a5.92 5.92 0 00-5.61 4.029L1.132 115.55a5.91 5.91 0 005.6 7.8h28.893c1.239 0 2.446-.41 3.452-1.113a5.923 5.923 0 002.157-2.916l7.019-20.71-13.411-12.857c-.246-.273-1.353-2.274-.369-4.002 1.108-1.659 2.955-1.659 2.955-1.659h17.285l9.074-26.145L48.274 8.321c-.042-.205-.914-1.365-2.281-2.28-1.37-.915-3.345-.909-3.345-.909zm-4.88 75.74a2.724 2.724 0 00-1.86 4.718l37.83 35.31c1.101 1.03 2.502 1.631 4.007 1.631 0 0 1.282.068 2.055-.033 1.817-.273 3.525-1.768 4.09-2.39 1.457-1.939.794-4.95.794-4.95l-11.45-34.28z",
};
// SQL is a language without a logo of its own, so it gets the usual database symbol.
const database: Icon = {
  path: "M12 2C7.58 2 4 3.57 4 5.5v13C4 20.43 7.58 22 12 22s8-1.57 8-3.5v-13C20 3.57 16.42 2 12 2Zm0 2c3.73 0 5.85 1.2 6 1.5-.15.3-2.27 1.5-6 1.5s-5.85-1.2-6-1.5C6.15 5.2 8.27 4 12 4ZM6 8.07C7.47 8.65 9.6 9 12 9s4.53-.35 6-.93V11.5c-.15.3-2.27 1.5-6 1.5s-5.85-1.2-6-1.5V8.07Zm0 6C7.47 14.65 9.6 15 12 15s4.53-.35 6-.93v4.43c-.15.3-2.27 1.5-6 1.5s-5.85-1.2-6-1.5v-4.43Z",
};

// Brand marks from Simple Icons unless noted above. OSV.dev has no mark and stays text only.
const ICONS: Record<string, Icon> = {
  Python: siPython,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Java: java,
  SQL: database,
  React: siReact,
  "React Native": siReact,
  "React Three Fiber": siThreedotjs,
  MUI: siMui,
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
  "Microsoft Azure": azure,
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
    <svg className="tech-icon" viewBox={icon.viewBox ?? "0 0 24 24"} aria-hidden="true" focusable="false">
      <path d={icon.path} />
    </svg>
  );
}
