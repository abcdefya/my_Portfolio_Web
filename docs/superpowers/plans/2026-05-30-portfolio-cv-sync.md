# Portfolio CV Sync Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the React portfolio UI so English and Vietnamese content matches the latest `MY_CV.tex`.

**Architecture:** Keep the existing Create React App structure and bilingual component-level `content` objects. Update visible copy in place, preserve current layout and behavior, and replace the default smoke test with CV-specific checks.

**Tech Stack:** React 18, Create React App, React Bootstrap, React Testing Library, Jest.

---

## File Structure

- Modify `src/App.test.js`: replace the default "learn react" test with smoke tests for the latest CV content in both languages.
- Modify `src/App.js`: fix the Vietnamese skip-link string.
- Modify `src/components/Banner.js`: update hero positioning, summary, rotating roles, and stats.
- Modify `src/components/Skills.js`: update skill groups and tags from the CV.
- Modify `src/components/Projects.js`: update featured projects, experience tab, and education tab.
- Modify `src/components/NavBar.js`: fix Vietnamese navigation labels.
- Modify `src/components/Contact.js`: fix Vietnamese contact-form labels and status copy.
- Modify `src/components/Footer.js`: fix Vietnamese copyright copy.
- Modify `src/components/PortfolioAssistant.js`: fix Vietnamese assistant text and refresh English assistant copy.

## Task 1: Replace Default Smoke Test

**Files:**
- Modify: `src/App.test.js`

- [ ] **Step 1: Write the failing test**

Replace `src/App.test.js` with:

```javascript
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders latest CV information in English', () => {
  render(<App />);

  expect(screen.getByText(/AIOps\/MLOps Engineer/i)).toBeInTheDocument();
  expect(screen.getByText(/AI English Speaking Coach/i)).toBeInTheDocument();
  expect(screen.getByText(/LLM & Agentic AI/i)).toBeInTheDocument();
  expect(screen.getByText(/NTQ Solution/i)).toBeInTheDocument();
});

test('renders latest CV information in Vietnamese', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'VI' }));

  expect(screen.getByText(/Kỹ sư AIOps\/MLOps/i)).toBeInTheDocument();
  expect(screen.getByText(/Huấn luyện viên nói tiếng Anh AI/i)).toBeInTheDocument();
  expect(screen.getByText(/LLM & AI tác tử/i)).toBeInTheDocument();
  expect(screen.getByText(/NTQ Solution/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
npm test -- --watchAll=false
```

Expected: FAIL because at least one of the new CV strings is not rendered yet.

- [ ] **Step 3: Leave the failing test uncommitted**

Run:

```bash
git status --short
```

Expected: `src/App.test.js` is modified and uncommitted. Keep it in the working tree until the content updates make it pass.

## Task 2: Update Hero Banner Content

**Files:**
- Modify: `src/components/Banner.js`

- [ ] **Step 1: Replace the `content` object in `Banner.js`**

Use this `content` object:

```javascript
  const content = {
    en: {
      tagline: "Welcome to my portfolio",
      title: "Hi! I'm Do The Anh",
      rotate: ["AIOps/MLOps Engineer", "AI Engineer", "RAG & Conversational AI Engineer"],
      summary: "AIOps/MLOps Engineer with 1+ year of hands-on experience building conversational AI products, chatbots, and RAG pipelines for real users. I work across FastAPI, PostgreSQL, Docker, cloud infrastructure, and production AI deployment.",
      connect: "Let's Connect",
      projects: "View Projects",
      stats: ["AI Engineer at NTQ Solution", "VinUni AI Talent participant", "Built end-to-end AI systems"]
    },
    vi: {
      tagline: "Chào mừng đến portfolio của tôi",
      title: "Xin chào! Mình là Đỗ Thế Anh",
      rotate: ["Kỹ sư AIOps/MLOps", "Kỹ sư AI", "Kỹ sư RAG & AI hội thoại"],
      summary: "Kỹ sư AIOps/MLOps với hơn 1 năm kinh nghiệm thực chiến xây dựng sản phẩm AI hội thoại, chatbot và pipeline RAG cho người dùng thật. Mình làm việc với FastAPI, PostgreSQL, Docker, hạ tầng cloud và triển khai AI production.",
      connect: "Liên hệ",
      projects: "Xem dự án",
      stats: ["AI Engineer tại NTQ Solution", "Thành viên VinUni AI Talent", "Xây dựng hệ thống AI end-to-end"]
    }
  };
```

- [ ] **Step 2: Run the test**

Run:

```bash
npm test -- --watchAll=false
```

Expected: tests may still fail until skills and projects are updated.

- [ ] **Step 3: Leave banner update uncommitted**

Run:

```bash
git status --short
```

Expected: `src/App.test.js` and `src/components/Banner.js` are modified and uncommitted.

## Task 3: Update Skills Content

**Files:**
- Modify: `src/components/Skills.js`

- [ ] **Step 1: Replace the `content` object in `Skills.js`**

Use this `content` object:

```javascript
  const content = {
    en: {
      title: "Core Skills",
      description: "A recruiter-friendly overview of the AI, backend, data, and MLOps capabilities I use to build production-ready intelligent systems.",
      groups: [
        {
          title: "LLM & Agentic AI",
          summary: "Conversational AI, RAG, prompt systems, embeddings, structured outputs, and agent workflows for real user-facing products.",
          tags: ["OpenAI API", "LangChain", "LangGraph", "RAG", "Prompt Engineering", "Qdrant", "Neo4j", "Hugging Face", "Ollama", "vLLM"]
        },
        {
          title: "DL/ML, Vision & OCR",
          summary: "Model training, evaluation, document understanding, OCR preprocessing, and detection pipelines for multilingual exam layouts.",
          tags: ["PyTorch", "Scikit-learn", "Transformers", "YOLOv8", "OpenCV", "OCR", "Albumentations"]
        },
        {
          title: "Backend & Data Engineering",
          summary: "API services, relational data models, batch and streaming pipelines, CDC workflows, and analytics-ready data platforms.",
          tags: ["Python", "C++", "JavaScript", "FastAPI", "Flask", "PostgreSQL", "Docker", "Spark", "Kafka", "Airflow", "Debezium CDC"]
        },
        {
          title: "Cloud & MLOps",
          summary: "Containerized deployments, Kubernetes operations, CI/CD, observability, and cloud infrastructure for AI systems.",
          tags: ["GCP", "AWS", "Kubernetes", "Terraform", "Jenkins", "Rancher", "Prometheus", "Grafana", "GitLab", "ELK"]
        }
      ]
    },
    vi: {
      title: "Kỹ Năng Chính",
      description: "Tổng quan dành cho nhà tuyển dụng về năng lực AI, backend, data và MLOps mà mình dùng để xây dựng hệ thống thông minh sẵn sàng cho production.",
      groups: [
        {
          title: "LLM & AI tác tử",
          summary: "AI hội thoại, RAG, hệ thống prompt, embedding, output có cấu trúc và workflow agent cho sản phẩm phục vụ người dùng thật.",
          tags: ["OpenAI API", "LangChain", "LangGraph", "RAG", "Prompt Engineering", "Qdrant", "Neo4j", "Hugging Face", "Ollama", "vLLM"]
        },
        {
          title: "DL/ML, Vision & OCR",
          summary: "Huấn luyện và đánh giá mô hình, hiểu tài liệu, tiền xử lý OCR và pipeline detection cho layout đề thi đa ngôn ngữ.",
          tags: ["PyTorch", "Scikit-learn", "Transformers", "YOLOv8", "OpenCV", "OCR", "Albumentations"]
        },
        {
          title: "Backend & Data Engineering",
          summary: "Dịch vụ API, mô hình dữ liệu quan hệ, pipeline batch và streaming, CDC workflow và nền tảng dữ liệu phục vụ analytics.",
          tags: ["Python", "C++", "JavaScript", "FastAPI", "Flask", "PostgreSQL", "Docker", "Spark", "Kafka", "Airflow", "Debezium CDC"]
        },
        {
          title: "Cloud & MLOps",
          summary: "Triển khai container, vận hành Kubernetes, CI/CD, observability và hạ tầng cloud cho hệ thống AI.",
          tags: ["GCP", "AWS", "Kubernetes", "Terraform", "Jenkins", "Rancher", "Prometheus", "Grafana", "GitLab", "ELK"]
        }
      ]
    }
  };
```

- [ ] **Step 2: Run the test**

Run:

```bash
npm test -- --watchAll=false
```

Expected: tests may still fail until projects are updated.

- [ ] **Step 3: Leave skills update uncommitted**

Run:

```bash
git status --short
```

Expected: `src/App.test.js`, `src/components/Banner.js`, and `src/components/Skills.js` are modified and uncommitted.

## Task 4: Update Projects, Experience, and Education

**Files:**
- Modify: `src/components/Projects.js`

- [ ] **Step 1: Replace the `content` object in `Projects.js`**

Use this `content` object:

```javascript
  const content = {
    en: {
      title: "Featured Projects",
      description: "Selected AI, RAG, and cloud-native data projects from my latest CV.",
      tabs: ["Main Projects", "Experience", "Education"],
      repoLabel: "View Repository",
      liveLabel: "Open Link",
      projects: [
        {
          title: "AI English Speaking Coach",
          description: "Real-time AI tutoring coach with Groq STT, LangGraph, ElevenLabs TTS, Azure speech assessment, FastAPI, PostgreSQL, Redis, MinIO, Elasticsearch, Docker, and GKE.",
          imgUrl: projImg1,
          projectUrl: "https://github.com/abcdefya/LinguAI",
          liveUrl: "https://github.com/abcdefya/LinguAI"
        },
        {
          title: "RAG Coding Assistant Chatbot",
          description: "Production-ready coding assistant using LangChain, OpenAI API, Neo4j, Qdrant, Ollama, hybrid retrieval, and multilingual debugging support.",
          imgUrl: projImg2,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya"
        },
        {
          title: "Binance Merchant Trading Flow",
          description: "Cloud-native Binance C2C merchant data platform with Spark ETL, PostgreSQL CDC, Debezium, Kafka, Flink, GKE, Terraform, Helm, Jenkins, Prometheus, Grafana, and ELK.",
          imgUrl: projImg3,
          projectUrl: "https://github.com/abcdefya/binance-merchant-trade-flow",
          liveUrl: "https://github.com/abcdefya/binance-merchant-trade-flow"
        }
      ],
      experience: "AI Engineer at NTQ Solution, Hanoi, Vietnam (Jan 2025 - Dec 2025): built OCR preprocessing pipelines with OpenCV, integrated GPT-4o-mini structured post-processing, developed a teacher-facing RAG Q&A chatbot, fine-tuned YOLOv8 for multi-table exam detection with >98% confidence, and improved robustness across Vietnamese and Japanese exam formats with Albumentations.",
      education: "Hanoi University of Science and Technology - B.Sc. in Mathematics and Informatics (2021 - 2025). Completed all degree requirements; graduation project awarded the highest rating by the Defense Committee."
    },
    vi: {
      title: "Dự Án Nổi Bật",
      description: "Một số dự án AI, RAG và nền tảng dữ liệu cloud-native tiêu biểu trong CV mới nhất.",
      tabs: ["Dự Án Chính", "Kinh Nghiệm", "Học Vấn"],
      repoLabel: "Xem Repository",
      liveLabel: "Mở Liên Kết",
      projects: [
        {
          title: "Huấn luyện viên nói tiếng Anh AI",
          description: "AI tutor thời gian thực với Groq STT, LangGraph, ElevenLabs TTS, Azure speech assessment, FastAPI, PostgreSQL, Redis, MinIO, Elasticsearch, Docker và GKE.",
          imgUrl: projImg1,
          projectUrl: "https://github.com/abcdefya/LinguAI",
          liveUrl: "https://github.com/abcdefya/LinguAI"
        },
        {
          title: "RAG Coding Assistant Chatbot",
          description: "Trợ lý lập trình dùng LangChain, OpenAI API, Neo4j, Qdrant, Ollama, hybrid retrieval và hỗ trợ debug đa ngôn ngữ.",
          imgUrl: projImg2,
          projectUrl: "https://github.com/abcdefya",
          liveUrl: "https://github.com/abcdefya"
        },
        {
          title: "Binance Merchant Trading Flow",
          description: "Nền tảng dữ liệu cloud-native cho Binance C2C merchant với Spark ETL, PostgreSQL CDC, Debezium, Kafka, Flink, GKE, Terraform, Helm, Jenkins, Prometheus, Grafana và ELK.",
          imgUrl: projImg3,
          projectUrl: "https://github.com/abcdefya/binance-merchant-trade-flow",
          liveUrl: "https://github.com/abcdefya/binance-merchant-trade-flow"
        }
      ],
      experience: "AI Engineer tại NTQ Solution, Hà Nội, Việt Nam (01/2025 - 12/2025): xây dựng pipeline tiền xử lý OCR bằng OpenCV, tích hợp GPT-4o-mini để hậu xử lý có cấu trúc, phát triển chatbot Q&A dùng RAG cho giáo viên, fine-tune YOLOv8 để phát hiện nhiều bảng trong đề thi với độ tin cậy >98%, và tăng độ bền mô hình trên định dạng đề thi tiếng Việt và tiếng Nhật bằng Albumentations.",
      education: "Đại học Bách khoa Hà Nội - Cử nhân Toán Tin (2021 - 2025). Đã hoàn thành toàn bộ yêu cầu chương trình; đồ án tốt nghiệp được Hội đồng bảo vệ đánh giá mức cao nhất."
    }
  };
```

- [ ] **Step 2: Run the test to verify it passes**

Run:

```bash
npm test -- --watchAll=false
```

Expected: PASS for both tests in `src/App.test.js`.

- [ ] **Step 3: Commit green CV content update**

Run:

```bash
git add src/App.test.js src/components/Banner.js src/components/Skills.js src/components/Projects.js
git commit -m "feat: align portfolio with latest cv"
```

Expected: Git creates a commit containing the passing smoke test plus the banner, skills, and projects updates.

## Task 5: Fix Supporting Bilingual UI Copy

**Files:**
- Modify: `src/App.js`
- Modify: `src/components/NavBar.js`
- Modify: `src/components/Contact.js`
- Modify: `src/components/Footer.js`
- Modify: `src/components/PortfolioAssistant.js`

- [ ] **Step 1: Update Vietnamese and assistant copy**

Use these exact replacements:

In `src/App.js`, replace the `skipToMain` assignment with:

```javascript
  const skipToMain = language === "vi" ? "Bỏ qua đến nội dung chính" : "Skip to main content";
```

In `src/components/NavBar.js`, use this `content` object:

```javascript
  const content = {
    en: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      connect: "Let's Connect"
    },
    vi: {
      home: "Trang chủ",
      skills: "Kỹ năng",
      projects: "Dự án",
      connect: "Liên hệ"
    }
  };
```

In `src/components/Contact.js`, use this `content` object:

```javascript
  const content = {
    en: {
      title: "Get In Touch",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      success: "Message sent successfully",
      failed: "Something went wrong, please try again later."
    },
    vi: {
      title: "Liên Hệ",
      firstName: "Tên",
      lastName: "Họ",
      email: "Email",
      phone: "Số điện thoại",
      message: "Nội dung",
      send: "Gửi",
      sending: "Đang gửi...",
      success: "Gửi tin nhắn thành công",
      failed: "Có lỗi xảy ra, vui lòng thử lại sau."
    }
  };
```

In `src/components/Footer.js`, use this `content` object:

```javascript
  const content = {
    en: "Copyright 2026. All Rights Reserved",
    vi: "Bản quyền 2026. Đã đăng ký bản quyền"
  };
```

In `src/components/PortfolioAssistant.js`, use this `content` object inside the existing `useMemo` call:

```javascript
  const content = useMemo(() => ({
    en: {
      badge: "Portfolio Assistant",
      title: "Ask about The Anh",
      subtitle: "Ask about his background, skills, experience, or projects.",
      collapse: "Minimize assistant",
      expand: "Open assistant",
      orbLabel: "Portfolio assistant orb",
      orbMessages: [
        "Ask me about The Anh's AI work.",
        "I can summarize his projects.",
        "Need a quick skills overview?"
      ],
      placeholder: "Ask a question...",
      send: "Send",
      empty: "Please enter a question first.",
      response: "I am The Anh's portfolio assistant.",
      welcome: "I can answer basic questions about The Anh, his AI engineering experience, skills, and projects."
    },
    vi: {
      badge: "Trợ Lý Portfolio",
      title: "Hỏi về Thế Anh",
      subtitle: "Bạn có thể hỏi về nền tảng, kỹ năng, kinh nghiệm hoặc dự án.",
      collapse: "Thu gọn trợ lý",
      expand: "Mở trợ lý",
      orbLabel: "Biểu tượng trợ lý portfolio",
      orbMessages: [
        "Hỏi mình về công việc AI của Thế Anh.",
        "Mình có thể tóm tắt các dự án.",
        "Bạn cần xem nhanh kỹ năng?"
      ],
      placeholder: "Nhập câu hỏi...",
      send: "Gửi",
      empty: "Vui lòng nhập câu hỏi trước.",
      response: "Tôi là trợ lý portfolio của Thế Anh.",
      welcome: "Tôi có thể trả lời các câu hỏi cơ bản về Thế Anh, kinh nghiệm AI engineering, kỹ năng và dự án của anh ấy."
    }
  }), []);
```

Also replace the Vietnamese chat error text in `PortfolioAssistant.js` with:

```javascript
            ? "Đã có lỗi xảy ra. Vui lòng thử lại."
```

- [ ] **Step 2: Run the test**

Run:

```bash
npm test -- --watchAll=false
```

Expected: PASS.

- [ ] **Step 3: Commit supporting copy update**

Run:

```bash
git add src/App.js src/components/NavBar.js src/components/Contact.js src/components/Footer.js src/components/PortfolioAssistant.js
git commit -m "fix: clean up bilingual portfolio copy"
```

Expected: Git creates a commit containing only the listed files.

## Task 6: Build Verification

**Files:**
- No code changes expected.

- [ ] **Step 1: Run production build**

Run:

```bash
npm run build
```

Expected: build completes successfully and writes the production bundle to `build/`.

- [ ] **Step 2: Check working tree**

Run:

```bash
git status --short
```

Expected: user pre-existing changes to `.env.example` and `MY_CV.tex` may still appear. New portfolio implementation files should be clean after commits.

- [ ] **Step 3: Report verification**

Report:

```text
Tests: npm test -- --watchAll=false passed.
Build: npm run build passed.
Pre-existing uncommitted files left untouched: .env.example, MY_CV.tex.
```
