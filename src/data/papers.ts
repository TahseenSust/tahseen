export interface Paper {
  title: string
  authors: string
  venue: string
  year: string
  url: string
  note: string
  tags: string[]
}

export const PAPERS: Paper[] = [
  {
    title: "Sequence to Sequence Learning with Neural Networks",
    authors: "Ilya Sutskever, Oriol Vinyals, Quoc V. Le",
    venue: "NeurIPS",
    year: "2014",
    url: "https://arxiv.org/pdf/1409.3215",
    note:
      "Introduced the encoder–decoder LSTM formulation that maps one variable-length sequence to another, laying the groundwork for modern neural machine translation and the sequence models that followed.",
    tags: ["Deep Learning", "NLP", "Seq2Seq"],
  },
  {
    title:
      "Neural Machine Translation by Jointly Learning to Align and Translate",
    authors: "Dzmitry Bahdanau, Kyunghyun Cho, Yoshua Bengio",
    venue: "ICLR",
    year: "2015",
    url: "https://arxiv.org/pdf/1409.0473",
    note:
      "The direct answer to the fixed-length bottleneck in encoder–decoder models: instead of squeezing a whole source sentence into one vector, the decoder learns to soft-search the input and weight the parts that matter for each output token. This is the origin of attention, and it is why I keep it next to the seq2seq paper.",
    tags: ["Attention", "NLP", "Deep Learning"],
  },
  {
    title: "Deep Residual Learning for Image Recognition",
    authors: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun",
    venue: "CVPR",
    year: "2016",
    url: "https://arxiv.org/pdf/1512.03385",
    note:
      "Showed that the barrier to deeper networks was optimization rather than capacity, and that letting layers fit a residual instead of a full mapping makes hundreds of layers trainable. I keep it here because the identity shortcut turned out to be a general architectural idea, not a vision-only trick.",
    tags: ["Deep Learning", "Computer Vision", "Architectures"],
  },
  {
    title: "Attention Is All You Need",
    authors:
      "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin",
    venue: "NeurIPS",
    year: "2017",
    url: "https://arxiv.org/pdf/1706.03762",
    note:
      "Took the attention mechanism from a supplement to recurrence and made it the entire model. Dropping the recurrent path removed the sequential dependency in training and made self-attention the default way to model long-range structure, which is why it sits at the end of this line of papers rather than beside them.",
    tags: ["Attention", "Transformers", "NLP"],
  },
  {
    title:
      "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    authors: "Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova",
    venue: "NAACL",
    year: "2019",
    url: "https://arxiv.org/pdf/1810.04805",
    note:
      "Took the Transformer encoder and asked what it could learn without a translation objective at all. Masked language modeling lets every token condition on both directions at once, and the result was that a single pre-trained model could be fine-tuned across tasks instead of designing an architecture per task. I keep it after the Transformer paper because it marks the shift from architectures to pre-training as the thing that carries the performance.",
    tags: ["Transformers", "NLP", "Pre-training"],
  },
  {
    title: "Language Models are Unsupervised Multitask Learners",
    authors:
      "Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei, Ilya Sutskever",
    venue: "OpenAI Technical Report",
    year: "2019",
    url: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf",
    note:
      "The other answer to the same question BERT asked, and the reason I keep the two together. Rather than pre-train and then fine-tune per task, GPT-2 treats the tasks themselves as text and shows a plain language-modeling objective at scale can perform them zero-shot. It is where capability starts coming from scale and framing rather than task-specific supervision.",
    tags: ["Transformers", "NLP", "Language Models"],
  },
  {
    title: "Scaling Laws for Neural Language Models",
    authors:
      "Jared Kaplan, Sam McCandlish, Tom Henighan, Tom B. Brown, Benjamin Chess, Rewon Child, Scott Gray, Alec Radford, Jeffrey Wu, Dario Amodei",
    venue: "arXiv preprint",
    year: "2020",
    url: "https://arxiv.org/pdf/2001.08361",
    note:
      "Made scaling a measurable engineering discipline. Across wide ranges of model size, data, and compute, language-model loss followed smooth power laws, turning the question from whether scale matters into how to allocate a fixed budget. I keep it next to GPT-3 because its compute-optimal prescription — favor much larger models and stop well before convergence — explains the bet that paper was making.",
    tags: ["Scaling Laws", "Language Models", "Compute"],
  },
  {
    title: "Language Models are Few-Shot Learners",
    authors: "Tom B. Brown et al.",
    venue: "NeurIPS",
    year: "2020",
    url: "https://arxiv.org/pdf/2005.14165",
    note:
      "GPT-3 turned scale into a practical argument for prompting: the same frozen language model could take a task description and a handful of examples in its context, then continue with the new task without gradient updates. I keep it because it made in-context learning impossible to dismiss, while also documenting the contamination, reliability, and societal questions that scale brings with it.",
    tags: ["Language Models", "In-context Learning", "Scaling"],
  },
  {
    title: "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale",
    authors:
      "Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob Uszkoreit, Neil Houlsby",
    venue: "ICLR",
    year: "2021",
    url: "https://arxiv.org/pdf/2010.11929",
    note:
      "The paper that made the Transformer feel native to vision: split an image into fixed-size patches, treat them as a token sequence, and let a standard encoder model their relationships. Its result is especially useful as a lesson in scale — with sufficiently large pre-training data, a model with far less image-specific bias can match or surpass the CNNs that had defined the field.",
    tags: ["Transformers", "Computer Vision", "Pre-training"],
  },
  {
    title:
      "You Get What You Chat: Using Conversations to Personalize Search-based Recommendations",
    authors: "Ghazaleh H. Torbati, Andrew Yates, Gerhard Weikum",
    venue: "ECIR",
    year: "2021",
    url: "https://arxiv.org/pdf/2109.04716",
    note:
      "Builds a user model out of ordinary conversation instead of ratings or questionnaires, then uses it to re-rank entity answers across books, travel, and food. I keep it because it treats unstructured chat as a legitimate source of preference signal, and because the comparison against questionnaire-derived profiles is an honest measurement of how much that signal is actually worth.",
    tags: ["Information Retrieval", "Recommender Systems", "Personalization"],
  },
  {
    title: "LoRA: Low-Rank Adaptation of Large Language Models",
    authors:
      "Edward Hu, Yelong Shen, Phillip Wallis, Zeyuan Allen-Zhu, Yuanzhi Li, Shean Wang, Lu Wang, Weizhu Chen",
    venue: "ICLR",
    year: "2022",
    url: "https://arxiv.org/pdf/2106.09685",
    note:
      "LoRA made adapting large models inexpensive enough to become ordinary practice: freeze the base weights and learn a small low-rank update instead of a full new copy per task. What makes the method unusually practical is that the update can be merged back into the original weights at deployment, preserving inference latency while dramatically reducing training and storage costs. I keep it because it changed fine-tuning from a model-owning operation into a lightweight, shareable layer of adaptation.",
    tags: ["Parameter-Efficient Fine-Tuning", "Language Models", "Adaptation"],
  },
  {
    title: "Training Compute-Optimal Large Language Models",
    authors: "Jordan Hoffmann et al.",
    venue: "arXiv preprint",
    year: "2022",
    url: "https://arxiv.org/pdf/2203.15556",
    note:
      "The Chinchilla result made the scaling question operational: many large language models were not too small, but undertrained. By revisiting the compute-optimal tradeoff, the paper found that parameters and training tokens should scale together; a 70B-parameter model trained on 1.4T tokens beat much larger peers at the same training budget. I keep it as the correction that made data a first-class scaling variable again.",
    tags: ["Scaling Laws", "Language Models", "Compute"],
  },
  {
    title: "Large Language Models as Zero-Shot Conversational Recommenders",
    authors:
      "Zhankui He, Zhouhang Xie, Rahul Jha, Harald Steck, Dawen Liang, Yesu Feng, Bodhisattwa Prasad Majumder, Nathan Kallus, Julian McAuley",
    venue: "CIKM",
    year: "2023",
    url: "https://arxiv.org/pdf/2308.10053",
    note:
      "The point where the zero-shot framing from GPT-2 meets the recommendation setting: an untuned language model, given conversations collected in the wild, beats systems trained for the task. What keeps it on the shelf is the probing analysis rather than the headline — the paper works to separate genuine capability from what the model already saw during pre-training, which is the question I want asked whenever a general model outperforms a specialized one.",
    tags: ["Language Models", "Recommender Systems", "Evaluation"],
  },
  {
    title: "A Multi-Agent Conversational Recommender System",
    authors:
      "Jiabao Fang, Shen Gao, Pengjie Ren, Xiuying Chen, Suzan Verberne, Zhaochun Ren",
    venue: "arXiv preprint",
    year: "2024",
    url: "https://arxiv.org/pdf/2402.01135",
    note:
      "MACRS treats a recommendation dialogue as a small team problem: specialized agents propose asking, chatting, and recommending moves, while a planner selects the next response. Its feedback-aware reflection step then turns a user’s reaction into both an updated profile and guidance for the next strategy. I keep it as an early, concrete example of using agent roles to make an LLM recommender less aimless over multiple turns.",
    tags: ["Recommender Systems", "LLM Agents", "Conversational AI"],
  },
  {
    title: "Harnessing the Universal Geometry of Embeddings",
    authors: "Rishi Jha, Collin Zhang, Vitaly Shmatikov, John X. Morris",
    venue: "NeurIPS",
    year: "2025",
    url: "https://arxiv.org/pdf/2505.12540",
    note:
      "Makes the Platonic Representation Hypothesis constructive for text embeddings: vec2vec learns to translate between incompatible embedding spaces without paired examples or access to the original encoder. I keep it here for both the geometric result and the security lesson — a vector database alone can reveal sensitive properties of the documents behind it.",
    tags: ["Embeddings", "Representation Learning", "Security"],
  },
  {
    title:
      "HistoryFinder: Advancing Method-Level Source Code History Generation with Accurate Oracles and Enhanced Algorithm",
    authors:
      "Shahidul Islam, Ashik Aowal, Md Sharif Uddin, Shaiful Chowdhury",
    venue: "arXiv preprint",
    year: "2025",
    url: "https://arxiv.org/pdf/2507.14716",
    note:
      "HistoryFinder starts with a question that matters as much as its algorithm: can we trust the oracle used to evaluate code-history tools? It builds corrected, expert-validated method-history ground truth and uses it to show that a new tracking approach can improve both accuracy and practical runtime. I keep it because dependable software-repository research begins with measuring historical change correctly — especially when methods are renamed, moved, merged, or refactored.",
    tags: ["Software Engineering", "Code History", "Evaluation"],
  },
  {
    title:
      "LLM-based Conversational Recommendation Agents with Collaborative Verbalized Experience",
    authors:
      "Yaochen Zhu, Harald Steck, Dawen Liang, Yinhan He, Nathan Kallus, Jundong Li",
    venue: "Findings of EMNLP",
    year: "2025",
    url: "https://aclanthology.org/2025.findings-emnlp.119.pdf",
    note:
      "CRAVE turns historical conversations and user feedback into retrievable verbal experience, rather than treating them as raw few-shot examples or one global set of rules. The idea becomes more interesting in its debater–critic setup: distinct agents retrieve their own preference-oriented experience before arguing over a recommendation. I keep it for this practical view of agent memory as personalized, feedback-grounded, and collaborative.",
    tags: ["Recommender Systems", "LLM Agents", "Memory"],
  },
  {
    title:
      "DualGauge: Automated Joint Security-Functionality Benchmarking of Specification-Only Code Generation by LLMs and Coding Agents",
    authors:
      "Rupam Patir, Keyan Guo, Suvadra Barua, Abhijeet Pathak, Dinesh Gudimetla, Jiawei Guo, Hongxin Hu, Haipeng Cai",
    venue: "arXiv preprint",
    year: "2025",
    url: "https://arxiv.org/pdf/2511.20709",
    note:
      "DualGauge makes a deceptively important point about coding-model evaluation: passing functional tests is not evidence that generated code is safe. By pairing functional and security tests for the same natural-language specification — and judging runtime behavior rather than outputs alone — it exposes a severe gap in joint success, including for agentic coding systems. I keep it as a reminder that a benchmark should measure the property we actually need, not a convenient proxy for it.",
    tags: ["Code Generation", "Security", "Evaluation"],
  },
  {
    title: "Memory Caching: RNNs with Growing Memory",
    authors:
      "Ali Behrouz, Zeman Li, Yuan Deng, Peilin Zhong, Meisam Razaviyayn, Vahab Mirrokni",
    venue: "arXiv preprint",
    year: "2026",
    url: "https://arxiv.org/pdf/2602.24281",
    note:
      "Asks whether recurrent models have to choose between efficient fixed-size state and the Transformer’s expensive growing memory. Memory Caching saves checkpoints of recurrent state and selectively combines them later, creating a controllable middle ground between linear recurrence and quadratic attention. I keep it for that framing: memory capacity is an architectural dial, not just a side effect of the model family.",
    tags: ["Sequence Models", "RNNs", "Long Context"],
  },
  {
    title: "Visual General Intelligence: A White Paper",
    authors: "Hirokatsu Kataoka et al.",
    venue: "arXiv preprint",
    year: "2026",
    url: "https://arxiv.org/pdf/2608.25924",
    note:
      "A useful intervention against treating language as the only route to general intelligence. Rather than argue for one definition or architecture, the paper maps the questions visual systems need to answer — spanning video, geometry, generation, continual learning, embodiment, and evaluation — if visual experience is to produce genuinely transferable capabilities. I keep it as an agenda-setting complement to the model papers on this shelf.",
    tags: ["Computer Vision", "Foundation Models", "Visual Intelligence"],
  },
]
